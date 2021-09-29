const dobInput = document.querySelector(".input--dob");
const luckyNumberInput = document.querySelector(".input--lucky-number");
const checkButton = document.querySelector(".btn-check");
const result = document.querySelector(".result");


checkButton.addEventListener("click", function checkLuck() {
    const dob = dobInput.value;
    const luckyNumber = luckyNumberInput.value;
    const sum = calculateSum(dob);
    if(dob&&luckyNumber) {
    compareValues(sum, luckyNumber);
    } else {
        result.innerText = "Please insert both the values";
    }
});

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        result.innerText = "YAY! Your Birthday is lucky🥳";
    } else {
        result.innerText = "OOPS! Your Birthday is not lucky😕";
    }
}