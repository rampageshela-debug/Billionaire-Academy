const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('nav a');
function showPage(id){ pages.forEach(p=>p.classList.toggle('active', p.id===id)); navLinks.forEach(a=>a.classList.toggle('active', a.getAttribute('href')==='#'+id)); window.scrollTo({top:0,behavior:'smooth'}); }
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{const id=link.getAttribute('href').slice(1); if(document.getElementById(id)){e.preventDefault();showPage(id)}}));
const modal=document.getElementById('auth-modal'); const views=document.querySelectorAll('.auth-view');
function view(name){views.forEach(v=>v.classList.add('hidden'));document.querySelector('.'+name+'-view').classList.remove('hidden')}
document.querySelectorAll('.login-open').forEach(b=>b.onclick=()=>{modal.classList.add('show');view('login')});
document.querySelectorAll('.signup-open').forEach(b=>b.onclick=()=>{modal.classList.add('show');view('signup')});
document.querySelector('.close').onclick=()=>modal.classList.remove('show'); modal.onclick=e=>{if(e.target===modal)modal.classList.remove('show')};
document.querySelector('.switch-signup').onclick=()=>view('signup');document.querySelector('.switch-login').onclick=()=>view('login');
document.getElementById('signup-form').onsubmit=e=>{e.preventDefault();document.getElementById('verify-email').textContent=e.target.querySelector('[type=email]').value;view('verify')};
document.getElementById('login-form').onsubmit=e=>{e.preventDefault();alert('Demo login successful. Connect this form to Firebase, Supabase, or your own backend for secure authentication.');modal.classList.remove('show')};
document.querySelector('.resend').onclick=()=>alert('Demo: verification email resent. Connect an authentication provider to send real emails.');

