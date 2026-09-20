const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('quoteForm').addEventListener('submit',e=>{
 e.preventDefault(); const d=new FormData(e.currentTarget);
 const subject='Royalton Engineered Products - Quote Request';
 const body=`Name: ${d.get('name')||''}\nEmail: ${d.get('email')||''}\nPhone: ${d.get('phone')||''}\nProject type: ${d.get('type')||''}\nApproximate size: ${d.get('size')||''}\nQuantity: ${d.get('quantity')||''}\nDesired completion date: ${d.get('date')||''}\n\nProject idea:\n${d.get('idea')||''}`;
 window.location.href=`mailto:royaltonengineeredproducts@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});