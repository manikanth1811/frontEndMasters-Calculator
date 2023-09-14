// Getting the Element Nodes for the numbers in numpad
numPad = document.querySelectorAll('.numbers')



for(let i = 0;i<numPad.length;i++){
    numPad[i].addEventListener('click', function(){
        resArea = document.querySelector('.results-area > h1');
        if(resArea.innerText.length>=15){
            return;
        }
        let prevNum = resArea.innerText;
        let currNum = numPad[i].className[numPad[i].className.length-1];
        currNum = prevNum + currNum;
        if(currNum[0] == '0'){
            currNum = currNum.slice(1);
        }
        resArea.innerText =  currNum; 
    });
}

// Getting the Clear and Backspace buttons and adding event listners

clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click',function() {
    resArea = document.querySelector('.results-area > h1');
    resArea.innerText = '0';    
});

backspaceBtn = document.querySelector('.backspace');

backspaceBtn.addEventListener('click',function(){
    resArea = document.querySelector('.results-area > h1');
    if(resArea.innerText=='0') return;
    if(resArea.innerText.length==1){
        // console.log(resArea.innerText);
        resArea.innerText = '0';
        return;
    }
    resArea.innerText = resArea.innerText.slice(0,resArea.innerText.length-1);
});

let operand1 = -1;
let operator = "";



// Addition bnt 
addBtn = document.querySelector('.add');

addBtn.addEventListener('click',function (){
    operator = "+";
    resArea = document.querySelector('.results-area > h1');
    if(operand1!=-1 && resArea.innerText=='0') { 
        console.log(operand1 + " "+operator);    
        return;
    }
    operand1 = resArea.innerText;
    resArea.innerText = '0';
    console.log(operand1 + " "+operator);
});


// Subtraction btn
subBtn = document.querySelector('.sub');

subBtn.addEventListener('click',function (){
    operator = "-";
    resArea = document.querySelector('.results-area > h1');
    if(operand1!=-1 && resArea.innerText=='0') { 
        console.log(operand1 + " "+operator);    
        return;
    }
    operand1 = resArea.innerText;
    resArea.innerText = '0';
    console.log(operand1 + " "+operator);
});

// Mul btn
mulBtn = document.querySelector('.mul');

mulBtn.addEventListener('click',function (){
    operator = "*";
    resArea = document.querySelector('.results-area > h1');
    if(operand1!=-1 && resArea.innerText=='0') { 
        console.log(operand1 + " "+operator);    
        return;
    }
    operand1 = resArea.innerText;
    resArea.innerText = '0';
    console.log(operand1 + " "+operator);
});


// Div btn
divBtn = document.querySelector('.div');

divBtn.addEventListener('click',function (){
    operator = "/";
    resArea = document.querySelector('.results-area > h1');
    if(operand1!=-1 && resArea.innerText=='0') { 
        console.log(operand1 + " "+operator);    
        return;
    }
    operand1 = resArea.innerText;
    resArea.innerText = '0';
    console.log(operand1 + " "+operator);
});

// Equals Btn

equalBtn = document.querySelector(".equal");

equalBtn.addEventListener('click',function(){
    if(operand1==-1 || operator=="") return; 
    let ans;
    resArea = document.querySelector('.results-area > h1');
    let operand2 = parseInt(resArea.innerText);
    operand1 = parseInt(operand1);
    if(operator == "+"){
         ans = operand1+operand2;
    }
    else if(operator=='*'){
         ans = operand1*operand2;
    }
    else if(operator=='-'){
         ans = operand1 - operand2;
    }
    else {
         ans = operand1/operand2;
    }
    ans = Math.floor(ans);
    if(ans>999999999999999){
        ans = 0;
    }
    if(ans<0){
        ans = 0;
    }
    if(ans==Infinity){
        alert("The Answer is out of Range!!!");
        resArea.innerText = '0';
        return;
    }
    resArea.innerText = ans;
});