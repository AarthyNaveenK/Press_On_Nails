
function updateCartLabel(){
 let c=JSON.parse(localStorage.getItem('cart')||'[]');
 let el=document.getElementById('cartLabel');
 if(el) el.innerText=c.length?`Cart (${c.length})`:'Filled with Emptiness Please fill me';
}
window.onload=updateCartLabel;
