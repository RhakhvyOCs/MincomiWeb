document.getElementById('demo-btn')?.addEventListener('click', function(){
  const el = document.getElementById('click-result');
  if(el) el.textContent = 'Button clicked at ' + new Date().toLocaleTimeString();
});
document.getElementById('contact-form')?.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name')?.value || 'Friend';
  document.getElementById('message').textContent = `Thanks, ${name} — message received (demo).`;
});
