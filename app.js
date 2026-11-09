const dateEl=document.getElementById('today-date');
const now=new Date();
dateEl.textContent=now.toLocaleDateString('pt-BR',{weekday:'long',day:'numeric',month:'long'}).toUpperCase();
const dialog=document.getElementById('module-dialog');
const title=document.getElementById('dialog-title');
document.querySelectorAll('[data-module]').forEach(button=>button.addEventListener('click',()=>{
  title.textContent=button.dataset.module;
  dialog.showModal();
}));
document.querySelectorAll('.close,.close-action').forEach(button=>button.addEventListener('click',()=>dialog.close()));
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));}
