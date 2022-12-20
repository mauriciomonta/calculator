let showNum = document.getElementsByName('showNum')[0];

let numA = null;
let numB = null;
let finalRes;
let clear;


//ac / c button

function clearAll() {
    if (showNum.value) {
        clear = 'C';
        console.log(clear);
    } else {
        clear = 'AC';
        console.log(clear);
    }

    if (clear == 'AC') {
        showNum.value = '';
        numA = null;
        numB = null;
        finalRes = null;
        operator = null;
    } else {
        showNum.value = '';
    }

}

// numpad buttons

document.addEventListener('keydown', function (event) {
    console.log(event.keyCode, event.key);

    if (event.key >= 0 && event.key <= 9) {
        showNum.value += event.key;
    } else if (event.key == '.') {
        showNum.value += event.key;
    } else if (event.keyCode == 56) {
        firstStep('*');
    } else if (event.key == '=' || event.key == 'Enter') {
        result();
    } else if (event.key == '+') {
        firstStep('+');
    }
    else if (event.keyCode == 189) {
        firstStep('-');
    }
    else if (event.keyCode == 191) {
        firstStep('/');
    }
    else if (event.keyCode == 8) {
        showNum.value = showNum.value.slice(0, -1);
    }

});

function firstStep(operatorSym) {

    numA = parseFloat(showNum.value);
    console.log('num A:', numA);
    showNum.value = '';
    operator = operatorSym.value;
    if (!operator) {
        operator = operatorSym;
    }
    console.log('op:', operator);

    return;
}

function result() {

    //add empty input alert
    //add empty input alert
    //add empty input alert


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

    console.log('num A y B:', numA, numB);
    console.log('res', finalRes);
    showNum.value = finalRes;
}

function Oposite() {
    showNum.value = showNum.value * -1;
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
    if (showNum.value) {
        document.getElementById("copied").innerHTML = 'Result copied to clipboard.';
    } else {
        document.getElementById("copied").innerHTML = 'Nothing to copy.';
    }

    document.getElementById("copied").classList.add("flex");
    setTimeout(() => {
        document.getElementById("copied").classList.add("opacity");
    }, 100);
    setTimeout(() => {
        document.getElementById("copied").classList.remove("opacity");
        document.getElementById("copied").classList.remove("flex");
    }, 3000);
}
