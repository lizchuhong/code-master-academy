/* Code Master Lab Engine: simulated APIs, real SQLite via sql.js, real Python via Pyodide. */
(()=>{'use strict';
const el=id=>document.getElementById(id), show=(id,obj)=>{el(id).textContent=typeof obj==='string'?obj:JSON.stringify(obj,null,2)};
const select=(id,fn)=>el(id).addEventListener('change',e=>fn(e.target.value));
function storeDraft(key,val){try{const s=JSON.parse(localStorage.getItem('code-master-40weeks-v1')||'{}');s.labDrafts||={};s.labDrafts[key]=val;localStorage.setItem('code-master-40weeks-v1',JSON.stringify(s))}catch(e){console.warn('Draft could not be saved:',e)}}
function draft(key,defaultValue){try{return JSON.parse(localStorage.getItem('code-master-40weeks-v1')||'{}').labDrafts?.[key]||defaultValue}catch{return defaultValue}}
const samples={
sql:{
simple:"SELECT id,title,price_vnd,seats FROM tours ORDER BY id;",
join:"SELECT b.id,t.title,b.guests,b.status FROM bookings b JOIN tours t ON b.tour_id=t.id ORDER BY b.id;",
group:"SELECT t.title,COUNT(b.id) AS booking_count,SUM(b.guests*t.price_vnd) AS gross_revenue_vnd FROM tours t LEFT JOIN bookings b ON b.tour_id=t.id AND b.status='CONFIRMED' GROUP BY t.id,t.title;",
bank:"SELECT account_no,status,COUNT(*) AS n,SUM(amount) AS total_vnd FROM transactions WHERE status='SUCCESS' GROUP BY account_no HAVING SUM(amount)>0;",
integrity:"INSERT INTO tours(id,title,price_vnd,seats) VALUES (9,'Invalid tour',-100,8);"
},
python:{
basic:"price = 250000\nguests = 3\ntotal = price * guests\nprint('Tổng tiền mẫu:', total)\nassert total == 750000",
function:"def booking_total(price, guests):\n    if price < 0 or guests <= 0:\n        raise ValueError('Invalid data')\n    return price * guests\n\nprint(booking_total(750000, 2))\nassert booking_total(750000,2) == 1500000",
qa:"def price_change(old, new):\n    if old <= 0:\n        raise ValueError('Old price must be positive')\n    return (new-old)/old * 100\n\nassert price_change(100,110) == 10\nassert price_change(100,90) == -10\nprint('2 tests passed')",
finance:"prices = {'AAA':100.0,'BBB':45.0}\nfor ticker, price in prices.items():\n    print(ticker, price)\n# Dữ liệu thử nghiệm, không phải giá thị trường thực tế."
}};
const endpointSamples={
'GET /tours':'{}',
'POST /bookings':JSON.stringify({tour_id:1,guests:2,idempotency_key:'tour-demo-01'},null,2),
'GET /stocks':'{}',
'POST /watchlist':JSON.stringify({ticker:'AAA'},null,2),
'GET /banking/transactions':'{}',
'POST /banking/transfers':JSON.stringify({from:'TEST-001',to:'TEST-002',amount:100000,idempotency_key:'bank-demo-01'},null,2)
};
for(const b of document.querySelectorAll('[data-pane]'))b.addEventListener('click',()=>{
 document.querySelectorAll('[data-pane]').forEach(x=>x.setAttribute('aria-selected',String(x===b)));
 document.querySelectorAll('.pane').forEach(x=>x.hidden=x.id!=='pane-'+b.dataset.pane);
});
select('sql-sample',v=>{el('sql-code').value=samples.sql[v];storeDraft('sql',samples.sql[v])});
select('py-sample',v=>{el('py-code').value=samples.python[v];storeDraft('python',samples.python[v])});
select('api-endpoint',v=>{el('api-body').value=endpointSamples[v];storeDraft('api',endpointSamples[v])});
for(const [id,key] of [['sql-code','sql'],['py-code','python'],['api-body','api']]){
 el(id).addEventListener('input',()=>storeDraft(key,el(id).value));
}
const courses=[
 {id:1,title:'Hà Nội city walk (demo)',price_vnd:750000,seats:12},
 {id:2,title:'Ninh Bình landscape tour (demo)',price_vnd:1200000,seats:6},
 {id:3,title:'Huế heritage day (demo)',price_vnd:950000,seats:8}
];
const tickers=[{ticker:'AAA',price:100.5,source:'Mẫu học tập',currency:'VND DEMO'},{ticker:'BBB',price:45.2,source:'Mẫu học tập',currency:'VND DEMO'}];
let apiState;
function resetApi(){apiState={bookings:[],watchlist:[],transfers:[],idempotency:{},counts:[]};show('api-out','Dữ liệu giả lập đã reset. Thử GET /tours hoặc POST /bookings.')}
resetApi();
function respond(code,data){show('api-out','HTTP '+code+'\n'+JSON.stringify(data,null,2))}
function apiRun(){
 const endpoint=el('api-endpoint').value;
 let body={};try{body=JSON.parse(el('api-body').value||'{}')}catch(e){respond(400,{error:'Invalid JSON',detail:e.message});return}
 if(endpoint==='GET /tours'){respond(200,{data:courses,disclaimer:'Các tour và giá là dữ liệu giả lập'});return}
 if(endpoint==='GET /stocks'){respond(200,{data:tickers,disclaimer:'Không phải dữ liệu thị trường thực tế'});return}
 if(endpoint==='GET /banking/transactions'){respond(200,{data:apiState.transfers,disclaimer:'Chỉ mô phỏng, không có giao dịch ngân hàng thật'});return}
 if(endpoint==='POST /watchlist'){
  if(typeof body.ticker!=='string'||!tickers.some(t=>t.ticker===body.ticker.trim().toUpperCase())){respond(400,{error:'Ticker không hợp lệ',allowed:tickers.map(t=>t.ticker)});return}
  const ticker=body.ticker.trim().toUpperCase();
  if(apiState.watchlist.includes(ticker)){respond(409,{error:'Ticker already exists',watchlist:apiState.watchlist});return}
  apiState.watchlist.push(ticker);respond(201,{watchlist:apiState.watchlist});return
 }
 if(endpoint==='POST /bookings'){
  const tour=courses.find(t=>t.id===body.tour_id);
  if(!tour||!Number.isInteger(body.guests)||body.guests<=0){respond(400,{error:'tour_id/guests không hợp lệ'});return}
  if(!body.idempotency_key||typeof body.idempotency_key!=='string'){respond(400,{error:'Thiếu idempotency_key để kiểm tra retry'});return}
  if(apiState.idempotency['tour-'+body.idempotency_key]){respond(200,{...apiState.idempotency['tour-'+body.idempotency_key],replayed:true});return}
  if(body.guests>tour.seats){respond(409,{error:'Không đủ chỗ',available:tour.seats});return}
  const record={booking_id:'B'+String(apiState.bookings.length+1).padStart(3,'0'),tour_id:tour.id,guests:body.guests,status:'CONFIRMED',simulation:true};
  apiState.bookings.push(record);apiState.idempotency['tour-'+body.idempotency_key]=record;tour.seats-=body.guests;respond(201,record);return
 }
 if(endpoint==='POST /banking/transfers'){
  if(body.from!=='TEST-001'||body.to!=='TEST-002'||!Number.isInteger(body.amount)||body.amount<=0||body.amount>500000000){respond(400,{error:'Chỉ hỗ trợ tài khoản DEMO và amount 1–500000000'});return}
  if(!body.idempotency_key||typeof body.idempotency_key!=='string'){respond(400,{error:'idempotency_key bắt buộc'});return}
  if(apiState.idempotency['bank-'+body.idempotency_key]){respond(200,{...apiState.idempotency['bank-'+body.idempotency_key],replayed:true});return}
  const data={transaction_id:'T'+String(apiState.transfers.length+1).padStart(3,'0'),status:'SUCCESS',amount:body.amount,from:'TEST-001',to:'TEST-002',simulation:true};apiState.transfers.push(data);apiState.idempotency['bank-'+body.idempotency_key]=data;respond(201,data);return
 }
 respond(404,{error:'Unknown mock route'});
}
el('api-run').addEventListener('click',apiRun);el('api-reset').addEventListener('click',()=>{courses[0].seats=12;courses[1].seats=6;courses[2].seats=8;resetApi()});
el('api-body').value=draft('api',endpointSamples['GET /tours']);
el('sql-code').value=draft('sql',samples.sql.simple);
el('py-code').value=draft('python',samples.python.basic);
// SQL is real SQLite (sql.js WASM), initialized lazily on the first Run.
let sqlLib=null,db=null,sqlLoading=null;
const sqlCDN='https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.11.0/';
function scriptLoad(src){return new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=src;script.async=true;script.onload=resolve;script.onerror=()=>reject(Error('Không tải được thư viện từ CDN. Kiểm tra kết nối Internet.'));document.head.append(script)})}
const seedSQL=[
 "CREATE TABLE tours(id INTEGER PRIMARY KEY,title TEXT NOT NULL,price_vnd INTEGER CHECK(price_vnd>=0),seats INTEGER NOT NULL)",
 "CREATE TABLE bookings(id TEXT PRIMARY KEY,tour_id INTEGER REFERENCES tours(id),guests INTEGER CHECK(guests>0),status TEXT)",
 "CREATE TABLE stocks(ticker TEXT PRIMARY KEY,price REAL CHECK(price>=0),source TEXT)",
 "CREATE TABLE transactions(trans_id TEXT PRIMARY KEY,account_no TEXT,amount INTEGER CHECK(amount>0),status TEXT)",
 "INSERT INTO tours VALUES(1,'Ha Noi walk',750000,12),(2,'Ninh Binh',1200000,6),(3,'Hue heritage',950000,8)",
 "INSERT INTO bookings VALUES('B01',1,2,'CONFIRMED'),('B02',2,1,'PENDING'),('B03',1,3,'CONFIRMED')",
 "INSERT INTO stocks VALUES('AAA',100.5,'DEMO'),('BBB',45.2,'DEMO')",
 "INSERT INTO transactions VALUES('T001','TEST-001',100000,'SUCCESS'),('T002','TEST-001',150000,'FAILED'),('T003','TEST-002',250000,'SUCCESS')"
].join(';\n')+';';
async function sqlInitialize(){
 if(!sqlLib){if(!sqlLoading)sqlLoading=(async()=>{await scriptLoad(sqlCDN+'sql-wasm.js');return window.initSqlJs({locateFile:file=>sqlCDN+file})})();sqlLib=await sqlLoading}
 if(!db){db=new sqlLib.Database();db.run(seedSQL)}
}
el('sql-run').addEventListener('click',async()=>{
 const btn=el('sql-run');btn.disabled=true;show('sql-out','Đang tải/khởi chạy SQLite WASM…');
 try{await sqlInitialize();const sql=el('sql-code').value.trim();if(!sql){show('sql-out','Nhập một truy vấn SQL.');return}
 const res=db.exec(sql);
 if(!res.length)show('sql-out','Đã thực thi. Không có dòng kết quả (SELECT trả rỗng hoặc lệnh chỉ thay đổi dữ liệu).');
 else show('sql-out',res.map(r=>({columns:r.columns,rows:r.values})));
 }catch(e){show('sql-out','SQL Error: '+e.message+'\nGợi ý: thử SELECT, JOIN hoặc kiểm tra cú pháp/constraint.')}
 finally{btn.disabled=false}
});
el('sql-reset').addEventListener('click',async()=>{try{await sqlInitialize();db.close();db=new sqlLib.Database();db.run(seedSQL);show('sql-out','Đã đặt lại database SQL với dữ liệu mẫu.')}catch(e){show('sql-out','Không reset được: '+e.message)}});
// Python runs in a separate worker so even an accidental infinite loop can be stopped.
let worker=null,pythonBusy=false,workerUrl=null;
function freshWorker(){
 if(worker){worker.terminate();worker=null}
 if(workerUrl){URL.revokeObjectURL(workerUrl);workerUrl=null}
 const workerSource=[
 "let py=null;",
 "self.onmessage=async e=>{",
 " const output=[];",
 " try{",
 "   if(!py){importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js');py=await loadPyodide({indexURL:'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/'});}",
 "   py.setStdout({batched:s=>output.push(s)});py.setStderr({batched:s=>output.push('stderr: '+s)});",
 "   const result=await py.runPythonAsync(e.data.code);",
 "   if(result!==undefined&&result!==null)output.push(String(result));",
 "   self.postMessage({ok:true,text:output.join('\\n')||'(Không có output. Dùng print(...) để xem.)'});",
 " }catch(err){self.postMessage({ok:false,text:output.join('\\n')+'\\n'+String(err)})}",
 "};"
 ].join('\n');
 workerUrl=URL.createObjectURL(new Blob([workerSource],{type:'application/javascript'}));worker=new Worker(workerUrl);
 worker.onmessage=e=>{show('py-out',(e.data.ok?'Kết quả:\n':'Lỗi:\n')+e.data.text);pythonBusy=false;el('py-run').disabled=false};
 worker.onerror=e=>{show('py-out','Không tải hoặc chạy được Python. '+e.message+'\nCần có kết nối Internet lần đầu.');pythonBusy=false;el('py-run').disabled=false};
}
el('py-run').addEventListener('click',()=>{
 if(pythonBusy)return;if(!worker)freshWorker();pythonBusy=true;el('py-run').disabled=true;
 show('py-out','Đang chạy Python… Lần đầu có thể tải môi trường WASM từ Internet.');
 worker.postMessage({code:el('py-code').value});
});
el('py-stop').addEventListener('click',()=>{freshWorker();pythonBusy=false;el('py-run').disabled=false;show('py-out','Đã dừng và làm mới Python worker. Có thể chạy lại.');});
function money(n){return new Intl.NumberFormat('vi-VN',{maximumFractionDigits:0}).format(n)+' VNĐ'}
el('biz-run').addEventListener('click',()=>{
 const price=Number(el('biz-price').value),guests=Number(el('biz-guests').value),cost=Number(el('biz-cost').value),percent=Number(el('biz-commission').value);
 if(![price,guests,cost,percent].every(Number.isFinite)||price<0||cost<0||!Number.isInteger(guests)||guests<0||percent<0||percent>100){show('biz-out','Dữ liệu không hợp lệ. Hãy dùng số không âm, số khách nguyên và % hoa hồng từ 0–100.');return}
 const revenue=price*guests,commission=revenue*percent/100,profit=revenue-commission-cost,margin=revenue?profit/revenue*100:0;
 show('biz-out',['Doanh thu giả lập: '+money(revenue),'Hoa hồng: '+money(commission),'Chi phí vận hành: '+money(cost),'Lợi nhuận gộp sau hoa hồng/chi phí giả định: '+money(profit),'Biên theo doanh thu: '+margin.toFixed(2)+'%','Lưu ý: chưa tính thuế, phí phát sinh và nghĩa vụ thực tế.'].join('\n'));
});
let chain=[];
async function hash(value){const bytes=new TextEncoder().encode(value);const digest=await crypto.subtle.digest('SHA-256',bytes);return [...new Uint8Array(digest)].map(x=>x.toString(16).padStart(2,'0')).join('')}
const bodyOf=x=>JSON.stringify({index:x.index,previous:x.previous,data:x.data});
async function chainView(){show('chain-out',chain.length?chain.map(x=>({height:x.index,data:x.data,prev:x.previous.slice(0,12)+'…',hash:x.hash.slice(0,16)+'…'})):'Chưa có block.')}
el('chain-add').addEventListener('click',async()=>{
 const value=el('chain-data').value.trim();if(!value){alert('Nhập dữ liệu giả lập trước khi tạo block.');return}
 const last=chain.at(-1),record={index:chain.length,previous:last?.hash||'GENESIS',data:value};
 record.hash=await hash(bodyOf(record));chain.push(record);await chainView();
});
el('chain-tamper').addEventListener('click',async()=>{if(!chain.length){alert('Tạo ít nhất một block trước.');return}chain[0].data+=' (đã chỉnh sửa)';await chainView();show('chain-out',el('chain-out').textContent+'\n⚠ Dữ liệu block đầu đã bị sửa; hãy bấm Kiểm tra liên kết hash.')});
el('chain-verify').addEventListener('click',async()=>{if(!chain.length){show('chain-out','Chưa có block để kiểm tra.');return}
 let valid=true;
 for(let i=0;i<chain.length;i++){
  const current=chain[i],check=await hash(bodyOf(current));
  if(current.hash!==check||(i>0&&current.previous!==chain[i-1].hash)){valid=false;break}
 }
 show('chain-out',(valid?'✓ Liên kết hash hợp lệ':'✗ Hash mismatch: dữ liệu đã thay đổi hoặc chain mất liên kết')+'\n'+JSON.stringify(chain.map(x=>({index:x.index,data:x.data,hash:x.hash.slice(0,18)})),null,2));
});
const preferred=location.hash.slice(1);
if(['api','sql','python','business'].includes(preferred))document.querySelector('[data-pane="'+preferred+'"]')?.click();
})();
