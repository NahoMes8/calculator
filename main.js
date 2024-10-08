const buttons =document.querySelectorAll('button');
const calcScreen=document.querySelector('.calc');
const resultScreen=document.querySelector('.result');

let previousNumber='';
let currentNumber='';
let operator='';

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let buttonText=e.target.textContent;

        if(button.classList.contains('numbers')){
            if(calcScreen.textContent.length==30){
                return;
            }
            currentNumber+=buttonText;
            calcScreen.textContent=currentNumber;
        }
        else if(button.classList.contains('multiplication')||
                button.classList.contains('division')||
                button.classList.contains('subtraction')||
                button.classList.contains('addition')){
                    
                   previousNumber=currentNumber;
                   currentNumber='';
                   operator=buttonText;
                   calcScreen.textContent=previousNumber + '' + operator +''+ currentNumber;
        }
        else if(button.classList.contains('equals')){
            if(previousNumber && operator){
                let result=0;
                switch(operator){
                    case '*':
                        result= parseFloat(previousNumber) * parseFloat(currentNumber);
                        break;
                    case'/':
                        result= parseFloat(previousNumber) / parseFloat(currentNumber);
                        break;
                    case'-':
                        result=parseFloat(previousNumber) - parseFloat(currentNumber);
                        break;
                    case'+':
                        result=parseFloat(previousNumber) + parseFloat(currentNumber);
                        break;
                }
                resultScreen.textContent=result;
                calcScreen.textContent= previousNumber + "" + operator + "" + currentNumber;
                currentNumber='';
                previousNumber='';
                operator='';
            }
        }
        else if(button.classList.contains('clear')){
            currentNumber='';
            previousNumber='';
            operator='';
            calcScreen.textContent="";
            resultScreen.textContent='';
        }
        else if(button.classList.contains('del')){
            let currentText=calcScreen.textContent;
            currentText=currentText.slice(0,-1);
            calcScreen.textContent=currentText;
            currentNumber=currentText;
        }
        else if(button.classList.contains('dot')){
            if(!currentNumber.includes('.')){
                currentNumber+='.';
                calcScreen.textContent=currentNumber;
            }
        }

    })
})
/* TIPS FO THE NEXT FIX

1 make the operator signs appear once based on the required number of calcs
2 add other functionalities to the operators
3 redesign the interface
4 add a history of calculations menu
5 add keyboard functions to the calculator 
6 add a function where i could go on calculatin based on the already calculating numbers
or those in the calcScreen
7 and able to handle multiple calcs such as '7+3-2+4*5'
8 
*/