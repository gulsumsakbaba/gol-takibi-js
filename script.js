const buttonIncrease=document.getElementById("increase");
const buttonDecrease=document.getElementById("decrease");
const buttonReset=document.getElementById("reset");
const counterShow=document.getElementById("counter");
const nameShow=document.getElementById("name");
const buttonRename=document.getElementById("rename");



const buttonIncrease1=document.getElementById("increase1")
const buttonDecrease1=document.getElementById("decrease1");
const buttonReset1=document.getElementById("reset1");
const counterShow1=document.getElementById("counter1");
const nameShow1=document.getElementById("secondName");
const buttonRename1=document.getElementById("rename1");


let count=0;

buttonIncrease.addEventListener("click",function(){
    count+=1;
    counterShow.innerHTML=count;
})

buttonDecrease.addEventListener("click",function(){
    count-=1;
    counterShow.innerHTML=count;

    if(count<=0){
        count=1;
    }

})

buttonReset.addEventListener("click",function(){
  
    let num=prompt("sayıyı girin");
    counterShow.innerHTML=num;
    
   

});

buttonRename.addEventListener("click",function(){

    const firstName=prompt("ismi degiştir");
    nameShow.innerHTML=firstName;
})



buttonIncrease1.addEventListener("click",function(){
    count+=1;
    counterShow1.innerHTML=count;
})

buttonDecrease1.addEventListener("click",function(){
    count-=1;
    counterShow1.innerHTML=count;

    if(count<=0){
        count=1;
       
    }
})

buttonReset1.addEventListener("click",function(){
    
     let num=prompt("sayıyı girin");
     counterShow1.innerHTML=num;
 });

 buttonRename1.addEventListener("click",function(){

    const secName=prompt("ismi degiştir");
    nameShow1.innerHTML=secName;
})



