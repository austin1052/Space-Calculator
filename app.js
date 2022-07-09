// global state

let heldValue = null;
let heldOperation = null;
let nextValue = null;

//click functions

$(".digits button").click(function () {
  if (nextValue === null) {
    nextValue = "0"; // resets to null when cleared. Needs to be a number so you can do mathhhh
  }
  nextValue += $(this).text();
  console.log(nextValue);
  updateDisplay();
});

$(".add").click(function () {
  $(".next-operation").text("+");
  setHeldOperation(add);
  updateDisplay();
  console.log($(this).text());
});

$(".subtract").click(function () {
  $(".next-operation").text("-");
  setHeldOperation(subtract);
  updateDisplay();
  console.log($(this).text());
});

$(".multiply").click(function () {
  $(".next-operation").text("x");
  setHeldOperation(multiply);
  updateDisplay();
  console.log($(this).text());
});

$(".divide").click(function () {
  $(".next-operation").text("/");
  setHeldOperation(divide);
  updateDisplay();
  console.log($(this).text());
});

$(".equals").click(function () {
  setHeldOperation(null);
  $(".next-operation").text("");
  updateDisplay();
  console.log($(this).text());
});

$(".clear-all").click(function () {
  clearAll();
  updateDisplay();
  console.log($(this).text());
});

$(".clear-entry").click(function () {
  clearEntry();
  updateDisplay();
  console.log($(this).text());
});

// helper functions

function showValue(location, value) {
  // location is a selector for a row on the display grid
  if (value === null) {
    // if its null it needs to be set to a blank string instead of 0 so the display shows nothing when cleared
    $(location).text("");
  } else {
    $(location).text(Number(value)); //value is heldValue or nextValue
  }
}

function updateDisplay() {
  showValue(".next-value", nextValue);
  showValue(".held-value", heldValue);
}

function clearAll() {
  heldValue = null;
  heldOperation = null;
  nextValue = null; //shows NaN when a button is clicked if equal to null
  $(".next-operation").text("");
  // $(".next-value").text("");  //display showed "0" instead of nothing when cleared when this wasnt here
}

function clearEntry() {
  nextValue = null;
}

function setHeldOperation(operation) {
  if (heldOperation !== null) {
    heldValue = heldOperation(heldValue, nextValue); //heldOperation is add, subtract, multiply, or divide. heldValue and nextValue are x and y.
  } else if (nextValue !== null) {
    heldValue = nextValue;
  }
  nextValue = null;
  heldOperation = operation;
}

function add(x, y) {
  return Number(x) + Number(y);
}

function subtract(x, y) {
  return Number(x) - Number(y);
}

function multiply(x, y) {
  return Number(x) * Number(y);
}

function divide(x, y) {
  return Number(x) / Number(y);
}
