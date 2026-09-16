const displayElem = document.querySelector(".display");
const buttonsElem = document.querySelector(".buttons");

let currentValue = "0";
let previousValue = "";
let justEvaluatedValue = "";
let operation = null;
let history = [];

const updateDisplay = () => {
  displayElem.textContent = currentValue;
};

buttonsElem.addEventListener("click", (e) => {
  const targetElement = e.target;

  if (targetElement.dataset.value !== undefined) {
    if (currentValue.includes(".") && targetElement.dataset.value === ".") {
      return;
    } else {
      handleNumberClick(targetElement.dataset.value);
    }
  } else if (targetElement.dataset.operation == "clear") {
    handleClearClick();
  } else if (targetElement.dataset.operation == "equals") {
    handleEqualsClick();
  } else {
    handleOperationClick(targetElement.dataset.operation);
  }

  updateDisplay();
});

const calculate = (op, prev, current) => {
  switch (op) {
    case "add":
      return prev + current;
    case "subtract":
      return prev - current;
    case "multiply":
      return prev * current;
    case "divide":
      return prev / current;
    default:
      return 0;
  }
};

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
  if (previousValue !== "" && currentValue !== "") {
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    const result = calculate(op, prev, current);
    console.log("result", result);
    previousValue = result.toString();
    currentValue = "0";
  } else {
    previousValue = currentValue;
    operation = op;
    currentValue = "0";
  }
};

const handleEqualsClick = () => {
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentValue);

  const result = calculate(operation, prev, current);
  currentValue = result.toString();

  // CHECK IF THE HISTORY ARRAY ALREADY CONTAINS 10 ITEMS
  // .pop()

  history.push({
    previousValue: previousValue,
    operation: operation,
    currentValue: currentValue,
    result: result.toString(),
  });
  showHistory();
};

const showHistory = () => {
  console.log(history);
  const hitoryListElem = document.querySelector(".history-list");
  hitoryListElem.innerHTML = "";
  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.previousValue} ${item.operation} ${item.currentValue} = ${item.result}`;
    hitoryListElem.appendChild(li);
    li.style.color = "white";
    li.classList.add("history-item");
  });
};



//select clear history, create a clear history fn, add click event listener 


// add a key down event 
//document.eventListener (check if key is ESC key)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event