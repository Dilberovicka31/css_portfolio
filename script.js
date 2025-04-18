
// function to calculate two numbers 
function calculateSum() {
    // get the values of input and convert it to a number
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
//   sum
  var sum = num1 + num2;
//   display the total
  document.getElementById("results").innerHTML = "Sum: " + sum;
}

// if there's no submit button in html prevent the error message
const sumButton = document.getElementById("sum");
if (sumButton) {
  sumButton.addEventListener("click", calculateSum);
}

let contactFormEl = document.getElementById("contactForm");
let confirmation = document.getElementById("confirmation");
contactFormEl.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    confirmation.innerHTML = "Please fill out all the fields!";
  } else {
    confirmation.innerHTML = "Thank you for your message!";
  }
});
contactFormEl.reset();
