'use strict';
const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const modelClose=document.querySelector(".close-modal");
const modelOpen=document.querySelectorAll(".show-modal");
const modelOpenFun=()=>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i=0;i<modelOpen.length;i++){
  modelOpen[i].addEventListener('click',modelOpenFun)
}
const modelCloseFun=()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
modelClose.addEventListener('click',modelCloseFun);
overlay.addEventListener('click',modelCloseFun);

document.addEventListener('keyup',function(e){
 if(e.key === 'Escape' && !modal.classList.contains('hidden'))
 {

        modelCloseFun();
    
 }
})