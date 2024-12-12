let nousername=document.getElementById("nousername");
nousername.style.display="none";
let ename=document.getElementById("name");
let username;
ename.addEventListener('focusout',()=>{
   username=(ename.value==null)?null:ename.value;
  
})
let nopassword=document.getElementById("nopassword");
 nopassword.style.display="none"
let cnpassword=document.getElementById("cnpassword");
let userpassword;
cnpassword.addEventListener('focusin',()=>{
    let password=document.getElementById("password");
    userpassword=(password.value!=null)?password.value:null;
    nopassword.style.display=(!userpassword)?"block":"none";
    nousername.style.display=(!username)?"block":"none";
})
let icon=document.getElementById("toggle-password");
console.log(icon);
let iconvisible=false;
icon.addEventListener('click',()=>{
    iconvisible=!iconvisible;
    icon.style.textDecoration=(iconvisible)?"line-through black":"none";
    if(iconvisible){
        cnpassword.setAttribute("type","text");
    }
    else{
        cnpassword.setAttribute("type","password");
    }
})
let submit=document.getElementById("submit");
let nocnpassword=document.getElementById("nocnpassword");
nocnpassword.style.display="none";

submit.addEventListener('click',()=>{
    if(cnpassword.value!=userpassword&&cnpassword.value!=null){
        nocnpassword.style.display="block";
    }
    else{
        nocnpassword.style.display="none";

    }
});

