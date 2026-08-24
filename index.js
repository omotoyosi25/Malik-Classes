const numberDivElem = document.querySelector("#number");


const screenElem = document.querySelector(".screen")

console.log(screenElem)
const numberBtns = document.querySelectorAll(".number-btn");
const numOneBtn = document.querySelector("#num-1");
const numTwoBtn = document.querySelector("#num-2");
const numThreBtn = document.querySelector("#num-3");
const numFourBtn = document.querySelector("#num-4");
const numFiveBtn = document.querySelector("#num-5");

console.log(numberBtns);

let firstNumber = "";
let secondNumber = "";
let operator = "";





numberBtns.forEach((numberBtn) => {
  numberBtn.addEventListener("click", function handleNumberClick() {
    if (firstNumber == "") {
     firstNumber = numberBtn.textContent;
      screenElem.textContent = firstNumber
    }
    else if (operator == "") {
        alert("Please select plus or minus")
    }
    else if (secondNumber == "") {
     secondNumber = numberBtn.textContent;
      screenElem.textContent = `${firstNumber} ${operator} ${secondNumber}`
    }
  });
});


const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");

function handlePlusBtnClick() {
 if(firstNumber == ""){
    alert("Please select a number first")
 }
 else if(firstNumber != ""){
    if(operator == ""){
        operator = "+"
    }
    else {
        alert("You have selected operator, sellect another number")
    }
 }
}
function handleMinusBtnClick() {
 if(firstNumber == ""){
    alert("Please select a number first")
 }
 else if(firstNumber != ""){
    if(operator == ""){
        operator = "-"
    }
    else {
        alert("You have selected operator, sellect another number")
    }
 }
}



plusBtn.addEventListener("click", handlePlusBtnClick);
minusBtn.addEventListener("click", handleMinusBtnClick);




const equalsBtn = document.querySelector(".equals-btn");

equalsBtn.addEventListener("click", function(){

    if(firstNumber == ""){
        alert("Select number")
    }
    else if(operator == ""){
        alert("please select plus or minus")
    }
    else if(secondNumber == ""){
        alert("please select secons number")
    }
    else {
        screenElem.textContent =eval(screenElem.textContent)
    }
})