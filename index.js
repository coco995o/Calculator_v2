function add(num1, num2){
    return num1 + num2;
}
function substract(num1, num2){
    return num1-num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    return num1/num2;
}
function remainder(num1, num2){
    return num1%num2;
}

let x='';
let a;
let b;
let result;
let sign;
let count=0;

const display=document.querySelector('.display');
const numbers=document.querySelectorAll('.calculator-button');
const clearButton=document.querySelector('.delete');
const displayNumbers=document.querySelector('.display-numbers');

clearButton.addEventListener('click', clear);

const calculator=()=>{
    const keys=document.querySelectorAll('.number');
    keys.forEach(key =>{
        key.addEventListener('click', (e)=>{
            x=x+key.textContent;
            displayNumbers.textContent=displayNumbers.textContent+e.target.textContent;
            console.log(x);
            if(sign==='='){
                a=null;
            }
            count++;
        });
    })
    const operator=document.querySelectorAll('.operation');
    operator.forEach(element =>{
        element.addEventListener('click', (e)=>{
            displayNumbers.textContent=displayNumbers.textContent+e.target.textContent;
            if(count!=0){
                if(a==null){
                    a=parseFloat(x);
                    console.log('a ='+a);
                    x='';
                }else if(sign==='='){
                    a=result;
                }
                else if(b==null){
                    b=parseFloat(x);
                    console.log('b ='+b);
                    if(sign==='+'){
                        result=add(a,b);
                    }
                    else if(sign==='-'){
                        result=substract(a,b);
                    }
                    else if(sign==='*'){
                        result=multiply(a,b);
                    }
                    else if(sign==='/'){
                        result=divide(a,b);
                    }
                    else if(sign==='%'){
                        result=remainder(a,b);
                    }
                    console.log(result);
                    a=result;
                    display.textContent=result;
                    b=null;
                    x='';
                }
                
                sign=e.target.textContent;
            }else{
                return;
            }
            
        });
    });

}
calculator();

function clear(){
    x='';
    display.textContent='';
    displayNumbers.textContent='';
    a=null;
    b=null;
    result=null;
    sign=null;
    count=0;
}
