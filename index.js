const sampleObject = {
  key: "value",
  getLength: function () {
    return 4;
  },
};

sampleObject.getLength();

const car = {
  name: "Toyota",
  fuel_level: 100,
  drive: function () {
    console.log(car.name + " is driving");
  },
};

"uuu".toUpperCase();
"unu".length;

const number = 120.23334556;
number.toFixed(2);

const newArray = [1, 2, 4];
newArray.length;
newArray.push(5);
newArray.pop();
// newArray.filter();

const scores = [45, 60, 52, 90, 80, 12];
// scores[1];

const passScores = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > 50) {
    passScores.push(scores[i]);
  }
}

function square(num) {
  return num * num;
}

const arrowFnSquare = (num) => {
  return num * num;
};

const arrowFnWOCurlyBraces = (num) => num * num;
const arrowFnWOCurlyBracesAndParethesis = (num) => num * num;

console.log(square(5), "regular fn");
console.log(arrowFnSquare(5), "arrow fn with curly braces");
console.log(arrowFnWOCurlyBraces(5), "arrow fn without curly braces");
console.log(
  arrowFnWOCurlyBracesAndParethesis(5),
  "arrow fn without curly braces and parentheses",
);

newArray.forEach((elem) => {
  console.log(elem * 2);
});

const newPassScores = scores.filter((score) => score > 50);

const stdents = [
  {
    name: "John",
    score: 90,
  },
  {
    name: "Jane",
    score: 80,
  },
  {
    name: "Jim",
    score: 70,
  },
  {
    name: "Jack",
    score: 60,
  },
];

const passedStudents = stdents.filter((student) => student.score > 79)
.map((student) => student.name);








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


const itemsElems = document.querySelectorAll(".item");
console.log(itemsElems);


itemsElems.forEach((itemElem) => {
    itemElem.style.color ="blue"


    itemElem.addEventListener("click", ()=>{
        itemElem.style.color = "red"
    })
})



const array1 = [1, 2, 3, 4, 5]