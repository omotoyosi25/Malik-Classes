const displayElem = document.querySelector(".display");
const buttonsElem = document.querySelector(".buttons");

let currentValue = "0";
let previousValue = "";
let operation = null;

const updateDisplay = () => {
  displayElem.textContent = currentValue;
};

buttonsElem.addEventListener("click", (e) => {
  const targetElement = e.target;

  if (targetElement.dataset.value !== undefined) {
    handleNumberClick(targetElement.dataset.value);
  } else if (targetElement.dataset.operation == "clear") {
    handleClearClick();
  } else if (targetElement.dataset.operation == "equals") {
    handleEqualsClick();
  } else {
    handleOperationClick(targetElement.dataset.operation);
  }

  updateDisplay();
});

const handleNumberClick = (number) => {
  if (currentValue === "0") {
    currentValue = number;
  } else {
    currentValue = currentValue + number;
  }
};

const handleClearClick = () => {
  currentValue = "0";
  previousValue = "";
  operation = null;
};


const handleOperationClick = (op) => {
    previousValue = currentValue;
    operation = op;
    currentValue = "0";

}

const handleEqualsClick = ()=>{
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    let result;

    if (operation === "add") {
        result = prev + current;
    }
    if (operation === "subtract") {
        result = prev - current;
    }
    if (operation === "multiply") {
        result = prev * current;
    }
    if (operation === "divide") {
        result = prev / current;
    }
    currentValue = result.toString();
}




if (currentValue.includes(".")) {
    // Prevent adding another decimal point
}