const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));


const quoteForm = document.getElementById('quoteForm');
const thankYou = document.getElementById('thank-you');

if (quoteForm) {
  quoteForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const submitButton = quoteForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = 'SENDING...';

    try {
      const response = await fetch(quoteForm.action, {
        method: 'POST',
        body: new FormData(quoteForm),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        quoteForm.reset();
        thankYou.classList.add('show');
        thankYou.scrollIntoView({ behavior: 'smooth' });
      } else {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        alert('We were unable to send your request. Please try again or contact Royalton Engineered Products directly.');
      }
    } catch (error) {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
      alert('We were unable to send your request. Please try again or contact Royalton Engineered Products directly.');
    }
  });
}
