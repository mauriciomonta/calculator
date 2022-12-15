let showNum = document.getElementsByName('showNum')[0];

let numA = null;
let numB = null;
let finalRes;

function firstStep(operatorSym) {

    numA = parseFloat(showNum.value);
   console.log(numA);
   showNum.value = '';
   operator = operatorSym.value;
   console.log(operator);

   return;
}

function result() {
    numB = parseFloat(showNum.value);

    switch(operator) {
        case '+':
            finalRes = numA + numB;
            break;
        case '-':
            finalRes = numA - numB;
            break;
        case '*':
            finalRes = numA * numB;
            break;
        case '/':
            finalRes = numA / numB;
            break;
    }

    console.log(numA,numB);
    console.log('res',finalRes);
    showNum.value = finalRes;
}