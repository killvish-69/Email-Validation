const entryelement=document.getElementById('textbox');
const errorimage=document.querySelector('.errorimg');
const validation=document.querySelector('.valcondition');
const submit=document.getElementById('submit');

submit.addEventListener('click',()=>{
    const emailvalue=entryelement.value;
if(!validemail(emailvalue))
{
    errorimage.classList.remove('hidden');
    validation.innerHTML='Please provide a valid email!'; 
    entryelement.style.border="2px solid red";
}
else{
    validation.innerHTML="";
    errorimage.classList.add('hidden');
    entryelement.style.border="2px solid green";
submit.style.backgroundImage="linear-gradient(135deg,white,green";
}
});
function validemail(email){
 
return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
