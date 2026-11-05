/* Progressive UX: inline question answers, persistent drafts, mobile navigation. */
(function(){
  'use strict';
  const codeApp=typeof all!=='undefined'&&typeof renderDay==='function';
  const getItems=()=>codeApp?all:lessons;
  const getItem=()=>getItems()[current];
  const getSections=()=>getItem().sections||[];
  const getId=()=>codeApp?getItem().id:'I'+getItem().number;
  const getTitle=()=>getItem().title;
  const html=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const go=(i)=>{if(codeApp)openDay(getItems()[i].id);else openLesson(i)};
  const goSection=(i)=>{section=i;if(codeApp)renderDay();else renderLesson()};
  function store(key,value,status){
    state.answers||={};
    const prev=state.answers[key]||{};
    state.answers[key]={text:value,status:status||prev.status||'draft',updated:new Date().toISOString()};
    save();
  }
  function buildAnswer(key,index,prompt){
    const p=document.createElement('div');p.className='inline-answer';
    const old=state.answers?.[key];const id='ans-'+key.replace(/[^a-zA-Z0-9]/g,'-');
    p.innerHTML='<label for="'+id+'">✍️ Trả lời câu '+index+' <span class="answer-status"></span></label>'+
       '<textarea id="'+id+'" rows="3" placeholder="Viết đáp án ngay tại câu này; nội dung tự lưu trên thiết bị." aria-label="Trả lời câu '+index+'"></textarea>'+
       '<div class="answer-actions"><button type="button" class="secondary submit-answer">Nộp câu (lưu trên máy)</button><small class="save-status" aria-live="polite"></small></div>';
    const textarea=p.querySelector('textarea'),statusEl=p.querySelector('.answer-status'),hint=p.querySelector('.save-status');
    textarea.value=old?.text||'';
    const setLabel=()=>{const a=state.answers?.[key];statusEl.textContent=a?.status==='submitted'?'✓ Đã nộp':'• Bản nháp';};
    setLabel();
    textarea.addEventListener('input',()=>{store(key,textarea.value,'draft');hint.textContent='Đã tự lưu';setLabel()});
    p.querySelector('button').addEventListener('click',()=>{
      if(!textarea.value.trim()){hint.textContent='Hãy viết câu trả lời trước khi nộp.';textarea.focus();return}
      store(key,textarea.value,'submitted');setLabel();hint.textContent='Đã nộp và lưu cục bộ. Chưa có chấm điểm tự động.';
    });
    return p;
  }
  function addQuestions(card,item,sec){
    const blocks=sec.blocks||[];
    const entries=blocks.map((b,i)=>({b,i})).filter(({b})=>b.type==='number'||b.type==='List Number');
    const nodes=[...card.querySelectorAll(':scope > .number')];
    const exercise=/(bài tập|thực hành|homework|esercizi|exercise|lab|speaking|role.play|writing|reading|question|luyện|kiểm tra|test|portfolio|pratica|d\. luyện)/i.test(sec.title);
    let total=0;
    for(let k=0;k<Math.min(nodes.length,entries.length,18);k++){
      const {b,i}=entries[k];
      if(!exercise&&!/(\?|hãy|viết|tạo|lập|thử|giải|mô tả|so sánh|nêu|dịch|scrivi|completa|rispondi|crea|calcola|câu \d)/i.test(b.text||''))continue;
      const key='q:'+getId()+':s'+section+':b'+i;
      nodes[k].insertAdjacentElement('afterend',buildAnswer(key,++total,b.text));
    }
    if(!total&&exercise){
      const prompts=codeApp?[
        'Giải thích khái niệm chính của '+item.title+' và đưa một ví dụ đầu vào/đầu ra.',
        'Thực hiện một ví dụ thực tế trong AI Tourism hoặc AI Stock với dữ liệu mẫu.',
        'Viết một trường hợp kiểm thử bình thường, một trường hợp lỗi và điều rút ra.'
      ]:[
        'Viết 3 câu tiếng Ý sử dụng nội dung của phần '+sec.title+'.',
        'Tạo hội thoại 4 lượt trong tình huống hướng dẫn khách Ý tại Việt Nam.',
        'Tự sửa ít nhất 2 lỗi diễn đạt, nêu lý do bằng tiếng Việt.'
      ];
      const wrapper=document.createElement('div');wrapper.className='practice-panel';
      wrapper.innerHTML='<h3>Thực hành bổ sung • từng câu</h3><p class="muted">Bài tập mở rộng; không thay thế bài trong giáo trình.</p>';
      prompts.forEach((q,i)=>{let t=document.createElement('div');t.className='question-prompt';t.textContent=(i+1)+'. '+q;wrapper.append(t);wrapper.append(buildAnswer('extra:'+getId()+':s'+section+':q'+i,i+1,q))});
      card.append(wrapper);
    }
  }
  function addHighlights(card,sec){
    if(/(đáp án|answer key|soluzioni|lời giải)/i.test(sec.title))return;
    const b=(sec.blocks||[]).find(x=>typeof x.text==='string'&&x.text.length>70&&!/https?:\/\//.test(x.text)&&!['Code Block'].includes(x.type));
    if(!b)return;
    let v=b.text.replace(/\s+/g,' ').trim();
    const point=v.split(/(?<=[.!?])\s+/)[0]||v;
    v=point.length>230?point.slice(0,225)+'…':point;
    const h=document.createElement('div');h.className='reading-highlight';
    h.innerHTML='<strong>Điểm cần nhớ</strong><p>'+html(v)+'</p>';
    const nav=card.querySelector('.navdays,.lesson-nav');
    if(nav)nav.insertAdjacentElement('afterend',h);
  }
  function displayOrder(item){const list=item.sections.map((_,i)=>i);if(!codeApp||!/^QA\d+D\d+$/.test(item.id))return list;const b=list.find(i=>item.sections[i].title==='A. Giải thích từ số 0 (Banking QA)');const z=list.find(i=>item.sections[i].title.startsWith('Hướng dẫn từ số 0'));const p=[];if(z!==undefined)p.push(z);if(b!==undefined)for(let k=b;k<Math.min(b+5,list.length);k++)p.push(k);return [...p,...list.filter(i=>!p.includes(i))]}
  function makeControls(item){
    const bar=document.createElement('div');bar.className='learning-toolbar';
    const count=getItems().length,secs=getSections().length;
    const order=displayOrder(item), position=Math.max(0,order.indexOf(section));
    const p=Math.round((position+1)/secs*100);
    bar.innerHTML='<div class="learning-progress"><span>📖 '+html(getTitle())+'</span><span>Phần '+(section+1)+'/'+secs+'</span></div>'+
      '<div class="learning-meter"><div style="width:'+p+'%"></div></div>'+
      '<div class="learning-actions"><button type="button" data-act="prevlesson" class="secondary" aria-label="Bài trước">‹ Bài</button>'+
      '<button type="button" data-act="prevsection" class="secondary" aria-label="Phần trước">‹ Phần</button>'+
      '<select aria-label="Chọn bài học" class="learning-jump"></select>'+
      '<button type="button" data-act="nextsection" class="secondary" aria-label="Phần tiếp">Phần ›</button>'+
      '<button type="button" data-act="nextlesson" class="secondary" aria-label="Bài tiếp">Bài ›</button></div>';
    const select=bar.querySelector('select');
    getItems().forEach((d,i)=>{let opt=document.createElement('option');opt.value=i;opt.textContent=(i+1)+'. '+d.title.slice(0,55);if(i===current)opt.selected=true;select.append(opt)});
    select.addEventListener('change',()=>go(Number(select.value)));
    for(const [action,cb,disabled] of [
      ['prevlesson',()=>go(Math.max(0,current-1)),current===0],
      ['prevsection',()=>goSection(order[position-1]),position===0],
      ['nextsection',()=>goSection(order[position+1]),position===secs-1],
      ['nextlesson',()=>go(Math.min(count-1,current+1)),current===count-1]
    ]){const btn=bar.querySelector('[data-act="'+action+'"]');btn.disabled=disabled;btn.addEventListener('click',cb)}
    return bar;
  }
  function enhance(){
    const item=getItem();
    if(!item)return;
    const card=[...root.querySelectorAll('.card')].find(el=>el.querySelector('.lesson-nav,.navdays'));
    if(!card)return;
    document.body.classList.add('reading-mode');
    state.answers||={};
    state.reading={id:getId(),index:current,section:section};
    save();
    const nav=card.querySelector('.lesson-nav,.navdays');
    nav.setAttribute('aria-label','Các phần của bài học');
    const tabs=[...nav.querySelectorAll('button')];displayOrder(item).forEach(i=>{if(tabs[i])nav.append(tabs[i])});
    const oldFooter=root.querySelector('#done')?.closest('.card')?.querySelector('.row');if(oldFooter)oldFooter.style.display='none';
    [...nav.querySelectorAll('button')].forEach(btn=>{btn.title=btn.textContent});
    const active=nav.querySelector('.active');if(active)active.scrollIntoView({inline:'center',block:'nearest'});
    addHighlights(card,getSections()[section]);
    addQuestions(card,item,getSections()[section]);
    const qaBtn=codeApp&&/^QA\d+D\d+$/.test(item.id)?document.createElement('button'):null;
    if(qaBtn){qaBtn.textContent='📘 Mở nội dung Banking chi tiết';qaBtn.className='secondary banking-shortcut';qaBtn.addEventListener('click',()=>goSection(Math.max(0,item.sections.findIndex(s=>s.title==='A. Giải thích từ số 0 (Banking QA)'))));card.querySelector('h2')?.insertAdjacentElement('afterend',qaBtn)}
    if(codeApp&&/^QA[12]D[1-5]$/.test(item.id)){const fromZero=item.sections.findIndex(v=>v.title.startsWith('Hướng dẫn từ số 0'));if(fromZero>=0){const btn=document.createElement('button');btn.className='secondary banking-shortcut';btn.textContent='🌱 Học IT từ con số 0';btn.addEventListener('click',()=>goSection(fromZero));card.querySelector('h2')?.insertAdjacentElement('afterend',btn)}}
    const legacy=root.querySelector('#work')?.closest('.card');
    if(legacy){const disclosure=document.createElement('details');disclosure.className='optional-notes';disclosure.innerHTML='<summary>Ghi chú tự do / xem trước code (tùy chọn)</summary>';legacy.insertAdjacentElement('beforebegin',disclosure);disclosure.append(legacy);legacy.classList.add('legacy-notes')}
    root.append(makeControls(item));
  }
  function resumeHome(){
    document.body.classList.remove('reading-mode');
    if(codeApp){const intro=document.createElement('div');intro.className='resume-banner';intro.innerHTML='<div><strong>🌱 Bắt đầu QA khi chưa biết IT</strong><p>Từ test case và nghiệp vụ ngân hàng đến SQL, API và automation — học theo từng bước.</p></div><button type="button">Học từ số 0 →</button>';intro.querySelector('button').addEventListener('click',()=>{const i=getItems().findIndex(d=>d.id==='QA1D1');if(i>=0)openDay('QA1D1',getItems()[i].sections.findIndex(x=>x.title.startsWith('Hướng dẫn từ số 0')))});root.insertAdjacentElement('afterbegin',intro)}
    const r=state.reading;
    if(!r)return;
    const item=getItems()[r.index];if(!item)return;
    const banner=document.createElement('div');banner.className='resume-banner';
    banner.innerHTML='<div><strong>Tiếp tục bài đang học</strong><p>'+html(item.title)+' • phần '+(r.section+1)+'</p></div><button type="button">Tiếp tục học →</button>';
    banner.querySelector('button').addEventListener('click',()=>{if(codeApp)openDay(item.id,Math.min(r.section,item.sections.length-1));else openLesson(r.index,Math.min(r.section,item.sections.length-1))});
    root.insertAdjacentElement('afterbegin',banner);
  }
  if(codeApp){const originalOpenDay=openDay;openDay=function(id,sec){if(sec===undefined&&/^QA\d+D\d+$/.test(id)){const day=getItems().find(x=>x.id===id);if(day){let i=day.sections.findIndex(v=>v.title.startsWith('Hướng dẫn từ số 0'));if(i<0)i=day.sections.findIndex(v=>v.title==='A. Giải thích từ số 0 (Banking QA)');sec=Math.max(0,i)}}return originalOpenDay(id,sec===undefined?0:sec)}}
  const originalHome=home;
  home=function(){originalHome();resumeHome()};
  if(codeApp){
    const old=renderDay;renderDay=function(){old();enhance();root.scrollIntoView({behavior:'smooth',block:'start'})};
  }else{
    const old=renderLesson;renderLesson=function(){old();enhance();root.scrollIntoView({behavior:'smooth',block:'start'})};
  }
  home();
})();