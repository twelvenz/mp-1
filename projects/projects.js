let first = document.getElementById("first").value;
first = Number(first);
let second = document.getElementById("second").value;
second = Number(second);

// addition function
function add() {
    let first = document.getElementById("first").value;
    first = Number(first);
    let second = document.getElementById("second").value;
    second = Number(second);

    let result = first + second;
    display(result);
}

// subtraction function
function sub() {
    let first = document.getElementById("first").value;
    first = Number(first);
    let second = document.getElementById("second").value;
    second = Number(second);

    result = first - second;
    display(result);
}

// multiplication function
function mul() {
    let first = document.getElementById("first").value;
    first = Number(first);
    let second = document.getElementById("second").value;
    second = Number(second);

    result = first * second;
    display(result);
}

// division function
function div() {
    let first = document.getElementById("first").value;
    first = Number(first);
    let second = document.getElementById("second").value;
    second = Number(second);

    result = first / second;
    display(result);
}

// power function
function power() {
    let first = document.getElementById("first").value;
    first = Number(first);
    let second = document.getElementById("second").value;
    second = Number(second);

    // negative power
    if (second < 0) {
        result = 1;
        // for loop to keep multiplying the base (first) i (the power) number of times
        for (let i = 0; i < second * -1; i++) {
            result *= first;
        }
        display(1/result);
    } else {
        result = 1;
        for (let i = 0; i < second; i++) {
            result *= first;
        }
        display(result);
    }
}

// clear function
function myClear() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = ""
    document.getElementById("first").innerHTML = "";
    document.getElementById("second").innerHTML = "";
    document.getElementById("output").innerHTML = "";
}

// display function
function display(result) {
    if (result < 0) {
        document.getElementById("output").innerHTML = result;
        // set negative results to red
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").innerHTML = result;
        // if not negative, default back to black
        document.getElementById("output").style.color = "black";
    }
}
