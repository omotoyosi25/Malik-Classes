// let, const
//variables are like labelled boxes that hold value/items
let nameeeeeee = "Khalid";
name = "New Name";

//make a variable constant
const age = 30;
const Age = 12;
let un;

const dateOfBirth = "01/01/1990";
const date_of_birth = "01/01/1990";

//data types/value types
let myName = "Khalid"; //string
console.log(typeof myName);

let myAge = 30.1; //number
console.log(typeof myAge);

let isMarried = false; //boolean (true or false)
console.log(typeof isMarried);

let myAddress = null; //null
console.log(typeof myAddress);

let myPhoneNumber = undefined; //undefined
console.log(typeof myPhoneNumber);

let newVariable;
console.log(typeof newVariable); //undefined

// NaN - not a number, trying to perform mathematical operations on invalid figues or string etc

// '', "", ``
const newName2 = "Name2";
const nameWithBackticks = `Name3`;

//Maths  +, -, *, /
let firstName = "Khalid";
let LastName = "Ahmed";

console.log(firstName + " " + LastName); //concatenation
const age2 = 20;
console.log(age2 + firstName);

const num1 = "5000";
const num2 = 10;

console.log(num1 - num2);

//Comparison Operators:- ==, === return either true, false, >, <, >=, <=, !=, !==
let name1 = "Ade";
let name2 = "Adex";
console.log(name1 == name2);

console.log(10 > 5, "10 is greater than 5");
console.log(12 < 3, "12 is greater than 3");

console.log(name1 != name2, "Name 1 is not equal to Name2");
console.log(1, "q", "nnn", true, undefined);

let agee = 18;
const votingAge = 18;

console.log(agee <= votingAge, "Agee is greater than or equals to votingAge");

//Logcal Operators  ||(OR), &&(AND), !(NOT)
const isAuthorized = name2 == "Adex" || votingAge > 200000;

const studentName = "Ada";
const HasParentConsent = true;
const studentAge = 19;
const studentHasPaid = true;
const consentORNotMinor = HasParentConsent && studentAge > 18;
console.log(consentORNotMinor && studentHasPaid, "Student verioeg");

//Conditionals - if else
let temperature = 30;
const isHumid = false;

if (temperature >= 30 && isHumid) {
  console.log("It's hot and humid outside");
} else if (temperature >= 30 && !isHumid) {
  console.log("It's hot but not humid outside");
} else {
  console.log("It's not hot");
}

// username, password
//correctUsername, correctPassword
// wrote and if/else statement that check if username and correctUername match
// AND password and correctPassword match
// log ("Access granted!")

const username = "Khalid";
const password = "123456";
const correctUsername = "Khalid";
const correctPassword = "123456";
const isAccountActive = true;
const isUserNameCorrect = username === correctUsername;
const isPasswordCorrect = password === correctPassword;

if (
  username === correctUsername &&
  password === correctPassword &&
  isAccountActive
) {
  console.log("Access granted!");
} else if (isUserNameCorrect && !isPasswordCorrect) {
  console.log("Incorrect password!");
} else if (!isUserNameCorrect && isPasswordCorrect) {
  console.log("Incorrect username!");
} else if (isUserNameCorrect && isAccountActive) {
  console.log("Account is active!");
} else if (!isUserNameCorrect && !isPasswordCorrect) {
  console.log("Incorrect username and password!");
} else if (isUserNameCorrect && isPasswordCorrect && !isAccountActive) {
  console.log("Account is not active!");
} else {
  console.log("Access denied!");
}

let score1 = 90;
let score2 = 60;

function sayHi() {
  console.log("Hi, welcome!");
  return "Hi";
}

function sayHiName(name, age) {
  console.log(`Hi welcome ${name}. You are ${age} years old`);
}

sayHiName("Ade", 20);
sayHiName("Lola", 35);

function gradeScore(score) {
  if (score <= 40) {
    console.log("score is F");
    return "F";
  } else if (score <= 50) {
    console.log("score is D");
    return "D";
  } else if (score <= 60) {
    console.log("score is C");
    return "C";
  } else if (score <= 60) {
    console.log("score is B");
    return "B";
  } else {
    console.log("score is A");
    return "A";
  }
}

const gradeOf86 = gradeScore(30);
console.log(gradeOf86, "gradeOf86");

function calculateTotalPrice(quantity, price) {
  console.log(quantity * price);
  return quantity * price;
}
const itemPrice = 6000;
const itemQuantity = 6;

const totalPrice = calculateTotalPrice(itemQuantity, itemPrice);


//create a function with 4 parameter : username, password, confirmPassword, isActive
// inside the function create a variable called correctUsername
// check if input username is equal to the corredct username
// check if password and confirmPassword match
// check if isActive is true



function login(username, password, confirmPassword, isActive) {
  const correctUsername = "Khalid";

  if (username === correctUsername && password === confirmPassword && isActive === true) {

    return "Login successful!";
  } else {
    return "Login failed!";
  }
}



// LOOPS
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Hello User 1");
greet("Bob");
greet("Charlie");
greet("David");
greet("Eve");
greet("Frank");

//FOR LOOP
// for (let i = 0; i < 5; i++) {
//   greet(`User ${i + 1}`);
// }

// let i = 1
// i = i + 1 = i++

//WHILE LOOP
let i = 0;
while (i < 5) {
  greet(`User ${i + 1}`);
  i++;
}

let number = 100;
while (number >= 0) {
  console.log(number);
  number = number - 10;
}

let balance = 5500;
let month = 1;
while (month <= 12) {
  if (balance < 5000) {
    balance = balance - 2;
    console.log(`Fees charged for month ${month}, balance: ${balance}`);
  } else if (month == 5) {
    balance = balance - 1000;
    console.log("Spent 1k on shopping");
  } else {
    console.log(`No fees charged for month ${month}`);
  }

  month++;
}

function trackSavings(initialBalance, monthlyDeposit, savingsGoal) {
  let currentBalance = initialBalance;

  for (let month = 1; month <= 24; month++) {
    currentBalance = currentBalance + monthlyDeposit;
    console.log(`Month ${month}: Current Balance: ${currentBalance}`);

    if (currentBalance >= savingsGoal) {
      console.log(
        "Congratulations! You have reached your savings goal of $1000.",
      );
      return month;
    } else {
      console.log("Keep saving: You haven't hit your goal");
    }
  }
}

const howLong100To5000 = trackSavings(40, 500, 5000);
console.log(howLong100To5000, "howLong100To5000");
const howLong3500To50000 = trackSavings(450, 3500, 50000);
console.log(howLong3500To50000, "howLong3500To50000");

//OBJECTS
{
  key: "value";
}

const newName = "New Name";
const newAge = 40;
const newDOB = "1962-02-09";

const person = {
  name: "Adelabu",
  age: 42,
  dob: "1962-02-09",
  is_active: true,
};
console.log(person.age);

function AboutPerson(person) {
  console.log(
    `This person is ${person.name}, they were born on ${person.dob} they are ${person.age} years old`,
  );
}

console.log(person["dob"], "name");

person.fav_quote = "blablabla"; //  add new key
person.name = "James"; // update existing key
person["fav_color"] = "Blue"; // update existing key

person.accounts = {
  savings: 10000,
  current: 1000000,
  bank: {
    name: "Bank",
  },
  print_balance: function () {
    console.log(person.accounts.savings, "This is your savings balance");
  },
};

console.log(person);
person.accounts.print_balance();

console.log("uuuyy".toUpperCase());

const account = {
  name: "Ada",
  balance: 500,
  monthly_savings: 200,
  saving_goal: 1_000_000,
};

const account2 = {
  name: "Ayo",
  balance: 1000,
  monthly_savings: 1_000_000,
  saving_goal: 10_000_000,
};

function trackSavingsWithObject(account) {
  for (let monthh = 1; monthh <= 24; monthh++) {
    account.balance = account.balance + account.monthly_savings;

    if(account.balance >= account.saving_goal){
        console.log(
        `Congratulations! You have reached your savings goal of ${account.saving_goal}`,
        account.name
      );
      break;
    }
    else if(month==24 && account.balance < account.saving_goal){
      console.log("Sorry, you never attained your goals", account.name)
      break;
    }
  }
}


const xxx =trackSavingsWithObject(account)
trackSavingsWithObject(account2)






//Create a function called getAccountSummary
// first call trackSavingsWithObject, add a return statement true or false to the if/else block
// if account reaches their savings goal add a key to the account object called
// "milestone_achieved" the log a summary of the acccount details with that milestone



function getAccountSummary(account) {
  const milestone = trackSavingsWithObject(account);

  if (milestone) {
    account.milestone_achieved = true;

    console.log("Account Summary:", {
      name: account.name,
      balance: account.balance,
      monthly_savings: account.monthly_savings,
      saving_goal: account.saving_goal,
      milestone_achieved: account.milestone_achieved,
    });
  } else {
    account.milestone_achieved = false;

    console.log("Account Summary:", {
      name: account.name,
      balance: account.balance,
      monthly_savings: account.monthly_savings,
      saving_goal: account.saving_goal,
      milestone_achieved: account.milestone_achieved,
    });
  }

  return milestone;
}

getAccountSummary(account);
getAccountSummary(account2);
































//ARRAYS
// 1, "sr", true | false,  {name: "Ade"}

let nname = "Bayo";
const newArr = ["Bayo", 5, true, { name: "Ayo" }];
