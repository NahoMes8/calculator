const buttons = document.querySelectorAll('button');
const resultScreen=document.querySelector('.result');
const calcScreen=document.querySelector('.calc');

let currentNumber='';
let previousNumber='';
let operator='';

function addition(a,b){
    return a+b;
}
function subtraction(a,b){
    return a-b;
}
function multiplication (a,b){
    return a*b;
}
function division (a,b){
    if(b===0){
        resultScreen.textContent("division by Zero is 'undefined'");
    }
   return a/b; 
}

function operate(operator,a,b){
    switch(operator){
        case"+":
            return addition(a,b);
            break;
        case'-':
            return subtraction (a,b);
            break;
        case'*':
            return multiplication (a,b);
            break;
        case'/':
            return division (a,b);
            break;
    }
}

buttons.forEach(button=>{
    button.addEventListener('click',e=>{
        let buttonText = e.target.textContent;

        if(button.classList.contains('numbers')){
            if(calcScreen.textContent.length==30){
                return;
            }
            currentNumber +=buttonText;
            calcScreen.textContent=currentNumber;
        }
        else if(button.classList.contains('addition')||
                button.classList.contains('subtraction')||
                button.classList.contains('multiplication')||
                button.classList.contains('division')){
                    previousNumber=currentNumber;
                    currentNumber='';
                    operator=buttonText;
                    calcScreen.textContent=previousNumber + '' + operator;
        }
        else if(button.classList.contains('equals')){
            let result= operate(operator, parseFloat(previousNumber),parseFloat(currentNumber));
            resultScreen.textContent=result;
            calcScreen.textContent= previousNumber + "" + operator + "" + currentNumber;
            operator="";
            currentNumber='';
            previousNumber=''
            
        }
        else if(button.classList.contains('clear')){
            calcScreen.textContent='';
            resultScreen.textContent='';
            currentNumber='';
            previousNumber="";
            operator="";
        }
        else if(button.classList.contains('del')){
            currentNumber=calcScreen.textContent;
            currentNumber=currentNumber.slice(0,-1);
            calcScreen.textContent=currentNumber;
        }
        else if(button.classList.contains('dot')){
            if(!currentNumber.includes('.')){
                currentNumber+=buttonText;
                calcScreen.textContent=currentNumber;
            }
        }
        
    })
})