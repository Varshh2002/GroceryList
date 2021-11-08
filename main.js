const gro=document.getElementById("groceries");
const pencil=document.getElementById("remove");
const all=document.getElementById("allitems");
const user=document.getElementById("userinput");

pencil.addEventListener('click',function(){
  all.innerHTML='';
})
user.addEventListener('keydown',function(event){
if(event.key=="Enter")
additem();
})

function additem(){
  let h2=document.createElement("h2");
  h2.innerHTML="-"+user.value;
  h2.addEventListener('click',function(){
    h2.style.textDecoration="line-through";
  })
  all.insertAdjacentElement("beforeend",h2);
  user.value="";
}