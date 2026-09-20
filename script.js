
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const summary=[
    'ROYALTON ENGINEERED PRODUCTS — QUOTE REQUEST',
    '',
    `Name: ${data.get('name')||''}`,
    `Email: ${data.get('email')||''}`,
    `Phone: ${data.get('phone')||''}`,
    `Project type: ${data.get('type')||''}`,
    '',
    'Project idea:',
    data.get('idea')||''
  ].join('\n');
  navigator.clipboard?.writeText(summary);
  const msg=document.getElementById('formMessage');
  msg.textContent='Quote request details copied to your clipboard. We will connect this form to your business email before launch.';
});
