/* Interactive capstone demo. Only fake data; session/local demo state. */
(()=>{'use strict';
const el=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tours=[
{id:1,dest:'Hà Nội',name:'Hanoi City Walk',price:750000,seats:12,description:'Phố cổ, Hồ Hoàn Kiếm, văn hóa đô thị'},
{id:2,dest:'Ninh Bình',name:'Tràng An Discovery',price:1200000,seats:8,description:'Cảnh quan karst và di sản văn hóa'},
{id:3,dest:'Huế',name:'Hue Heritage Day',price:950000,seats:10,description:'Kiến trúc và lịch sử cố đô'},
{id:4,dest:'Hội An',name:'Hoi An Old Town',price:680000,seats:12,description:'Phố cổ và dấu tích thương cảng'}];
const stocks=[
{symbol:'DEMO-A',values:[99,102,98,104,107,105,109,111]},
{symbol:'DEMO-B',values:[60,58,62,61,59,56,57,55]},
{symbol:'DEMO-C',values:[125,128,126,132,131,130,135,139]}
];
let bookings=[],watchlist=[];
const money=n=>new Intl.NumberFormat('vi-VN',{maximumFractionDigits:0}).format(n)+' VNĐ';
const key='code-master-product-demo-v1';
try{const state=JSON.parse(localStorage.getItem(key)||'{}');if(Array.isArray(state.bookings))bookings=state.bookings;if(Array.isArray(state.watchlist))watchlist=state.watchlist}catch{}
const save=()=>{try{localStorage.setItem(key,JSON.stringify({bookings,watchlist}))}catch(e){console.warn('Demo state not saved',e)}};
const available=t=>t.seats-bookings.filter(b=>b.tourId===t.id&&b.status==='confirmed').reduce((n,b)=>n+b.guests,0);
const opts=()=>{el('tour-option').innerHTML=tours.map(t=>'<option value="'+t.id+'">'+esc(t.name)+' · '+money(t.price)+'</option>').join('')};
function toursView(){
 const filter=el('destination').value;
 el('tour-cards').innerHTML=tours.filter(t=>filter==='all'||t.dest===filter).map(t=>'<article class="card"><span class="flag">'+esc(t.dest)+'</span><h3>'+esc(t.name)+'</h3><p>'+esc(t.description)+'</p><p>Giá giả: '+money(t.price)+'/khách</p><p>Còn '+available(t)+' chỗ mô phỏng</p><button data-tour="'+t.id+'">Chọn tour</button></article>').join('');
 el('tour-cards').querySelectorAll('[data-tour]').forEach(b=>b.addEventListener('click',()=>{el('tour-option').value=b.dataset.tour;el('customer').focus()}));
 const rows=bookings.map(b=>{
  const t=tours.find(t=>t.id===b.tourId);
  return '<tr><td>'+esc(b.id)+'</td><td>'+esc(t?.name)+'</td><td>'+esc(b.customer)+'</td><td>'+esc(b.date)+'</td><td>'+b.guests+'</td><td>'+esc(b.status)+'</td><td><button data-cancel="'+esc(b.id)+'" '+(b.status==='cancelled'?'disabled':'')+'>Hủy mẫu</button></td></tr>'
 });
 el('bookings').innerHTML=rows.join('')||'<tr><td colspan="7">Chưa có booking giả lập.</td></tr>';
 el('bookings').querySelectorAll('[data-cancel]').forEach(b=>b.addEventListener('click',()=>{const target=bookings.find(x=>x.id===b.dataset.cancel);if(target){target.status='cancelled';save();toursView()}}));
 const revenue=bookings.filter(b=>b.status==='confirmed').reduce((sum,b)=>sum+(tours.find(t=>t.id===b.tourId)?.price||0)*b.guests,0);
 const estimateCosts=revenue*0.7;
 el('tour-business').textContent='Doanh thu booking mẫu đã xác nhận: '+money(revenue)+' · giả sử chi phí 70%: '+money(estimateCosts)+' · chênh lệch dự kiến: '+money(revenue-estimateCosts)+'.';
}
el('destination').addEventListener('change',toursView);
el('booking-form').addEventListener('submit',e=>{
 e.preventDefault();const id=Number(el('tour-option').value),t=tours.find(x=>x.id===id),guests=Number(el('guest-count').value);
 const customer=el('customer').value.trim(),date=el('depart-date').value;
 if(!t||!customer||!date||!Number.isInteger(guests)||guests<1){el('booking-status').textContent='Dữ liệu chưa hợp lệ. Vui lòng kiểm tra thông tin.';return}
 if(guests>available(t)){el('booking-status').textContent='Không đủ chỗ giả lập. Còn '+available(t)+' chỗ.';return}
 const newId='DEMO-B'+String(bookings.length+1).padStart(3,'0');
 bookings.push({id:newId,tourId:id,guests,date,customer,status:'confirmed'});save();toursView();
 el('booking-status').textContent='Đã tạo booking GIẢ LẬP '+newId+'. Đây không phải đặt chỗ thực tế.';
});
el('clear-bookings').addEventListener('click',()=>{if(confirm('Xóa toàn bộ booking DEMO trong trang sản phẩm mẫu? Không ảnh hưởng bài học.')){bookings=[];save();toursView()}});
function stockView(){
 el('stock-cards').innerHTML=stocks.map(s=>{const now=s.values.at(-1),prev=s.values.at(-2),change=((now-prev)/prev*100).toFixed(2);
 return '<div class="card"><h3>'+s.symbol+'</h3><p>Giá giả: '+now+'</p><p>Thay đổi bước cuối: '+change+'%</p><small>Chỉ dữ liệu học tập, không phải mã niêm yết</small></div>'}).join('');
 el('watch-list').innerHTML=watchlist.length?watchlist.map(symbol=>'<div class="row"><strong>'+esc(symbol)+'</strong> <button data-remove="'+esc(symbol)+'">Xóa</button></div>').join(''):'<p>Danh sách mẫu đang trống.</p>';
 el('watch-list').querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>{watchlist=watchlist.filter(x=>x!==b.dataset.remove);save();stockView()}));
}
el('watch-add').addEventListener('click',()=>{const s=el('add-stock').value;if(!watchlist.includes(s)){watchlist.push(s);save();stockView()}});
function chart(){
 const data=stocks.find(s=>s.symbol===el('chart-stock').value),v=data.values;
 const min=Math.min(...v)-4,max=Math.max(...v)+4,points=v.map((x,i)=>(45+i*(560/(v.length-1))).toFixed(2)+','+(205-(x-min)/(max-min)*170).toFixed(2)).join(' ');
 const svg=el('stock-chart');svg.innerHTML='';
 const ns='http://www.w3.org/2000/svg';
 const line=document.createElementNS(ns,'polyline');line.setAttribute('points',points);line.setAttribute('fill','none');line.setAttribute('stroke','#ffd66a');line.setAttribute('stroke-width','3');line.setAttribute('stroke-linecap','round');svg.append(line);
 const start=v[0],end=v.at(-1),pct=((end-start)/start*100).toFixed(2);
 el('chart-summary').textContent=data.symbol+' · 8 điểm giá demo; từ '+start+' đến '+end+' ('+pct+'%).';
 el('stock-explanation').textContent='Biến động từ điểm đầu đến cuối: '+pct+'%. Đây là mô tả toán học của 8 giá mẫu, không dự báo lợi nhuận. Để đánh giá dữ liệu thật cần nguồn, ngày giờ, đơn vị, chi phí và các rủi ro. Ví dụ này không khuyến nghị mua hay bán.';
}
el('chart-stock').addEventListener('change',chart);
el('alert-check').addEventListener('click',()=>{const d=stocks.find(s=>s.symbol===el('alert-symbol').value),target=Number(el('alert-target').value);el('alert-result').textContent=!Number.isFinite(target)||target<=0?'Ngưỡng phải lớn hơn 0.':d.symbol+' đang '+d.values.at(-1)+(d.values.at(-1)>=target?' ≥ ':' < ')+target+'. Kết quả là cảnh báo GIẢ LẬP, không gửi thông báo.'});
document.querySelectorAll('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('active',x===btn));
 for(const tab of ['tour','stock'])el('panel-'+tab).hidden=tab!==btn.dataset.tab;
}));
const startDate=new Date();startDate.setDate(startDate.getDate()+1);el('depart-date').value=startDate.toISOString().slice(0,10);
opts();toursView();stockView();chart();
})();