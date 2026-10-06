const menuButton=document.querySelector('.menu-button');
const navigation=document.querySelector('.nav-links');
const navItems=document.querySelectorAll('.nav-links a');
menuButton.addEventListener('click',()=>{const isOpen=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(isOpen));});
navItems.forEach((item)=>item.addEventListener('click',()=>{navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
document.querySelector('#year').textContent=new Date().getFullYear();
