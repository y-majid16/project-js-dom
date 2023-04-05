"use strict";
const inputForm = document.querySelector("#input");
const submitButton = document.querySelector("#submit");
const outputDiv = document.querySelector("#output");
submitButton.addEventListener("click", () => {
  check();
});

function check() {
  let value = inputForm.value;
  if (value == 0) {
    console.error("invalid input");
    outputDiv.innerHTML += '<p style="color: red;">invalid input</p>';
  }
  if (value % 3 == 0 && value % 5 == 0) {
    console.log("FizzBuzz!");
    outputDiv.innerHTML += "<p>FizzBuzz</p>";
  } else if (value % 3 == 0) {
    console.log("Fizz");
    outputDiv.innerHTML += "<p>Fizz</p>";
  } else if (value % 5 == 0) {
    console.log("Buzz");
    outputDiv.innerHTML += "<p>Buzz</p>";
  } else if (value > 0 || value < 0) {
    console.log(value);
    outputDiv.innerHTML += `<p>${value}</p>`;
  } else {
    console.log("invalid input");
    outputDiv.innerHTML += '<p style="color: red;">invalid input</p>';
  }
}
