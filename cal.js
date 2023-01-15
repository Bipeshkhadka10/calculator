const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');


let firstvalue = "";
let isFirstvalue = false;
let econdavalue ="";
let isSecondvalue =false;
let sign ="";
let resultvalue = 0;

for(let i=0; i < numbers.length; i++)
{
     numbers[i].addEventListener('click',(e)=>
     {
          let atr = e.target.getAttribute('value');
          if(isFirstvalue === false){
               getFirstvalue(atr)
          }
     })
}

function getFirstvalue(el){
     result.innerHTML="";
     firstvalue += el;
     result.innerHTML = firstvalue;
     firstvalue = +firstvalue;

}