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

    switch (operator) {
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

    console.log(numA, numB);
    console.log('res', finalRes);
    showNum.value = finalRes;
}

function Copy() {
    let copyText = document.getElementsByName("showNum");
    let clipboard = copyText[0].value;

    // Select the text field
    focus(clipboard);

    // Copy the text inside the text field
    navigator.clipboard.writeText(clipboard);


    const grow = [
        { transform: 'scale(1)' },
        { transform: 'scale(1.03)' },
        { transform: 'scale(1)' }
    ];

    const growTiming = {
        duration: 200,
        iterations: 1,
    }

    const value = document.getElementById("showNum");
    value.animate(grow, growTiming)


    // Alert the copied text
    console.log("Copied the text: " + clipboard);

    // show alert
    document.getElementById("copied").classList.add("flex");
    setTimeout(() => {
        document.getElementById("copied").classList.add("opacity");
    }, 100);
    setTimeout(() => {
        document.getElementById("copied").classList.remove("opacity");
        document.getElementById("copied").classList.remove("flex");
    }, 3000);
}