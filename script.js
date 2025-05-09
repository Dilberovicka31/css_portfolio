
// function to calculate two numbers 
function calculateSum() {
    // get the values of input and convert it to a number
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
//   sum
  let sum = num1 + num2;
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

// add event listener to form
if(contactFormEl){
  contactFormEl.addEventListener("submit", function (e) {
    e.preventDefault();
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let consent = document.getElementById("consent").checked
    try {
      if (name === "" || email === "" || message === ""){
        throw new Error("Please fill out all the fields!");   
      }
      if(!email.includes("@") || !email.includes(".")){
        throw new Error("Please enter a valid email address.");
        
      }
      if(!consent){
        throw new Error("You must agree to be contacted.")
      }
      confirmation.innerHTML = "Thank you for your message!";
      
    } catch (error) {
      confirmation.innerHTML = error.message
      
    }
  
  });
  // reset form
  contactFormEl.reset();
  
}

// web privacy demo
const userInfo = document.getElementById("userInfo");

const dataPoints = [
  {label: "Check if browser is online", value: navigator.onLine},
  {label: "Language", value: navigator.language},
  {label: "Browser Information", value: navigator.userAgent},
  {label: "Width of the Screen", value: screen.availWidth},
  {label: "Height of the Screen", value: screen.availHeight},
  {label: "Depth of screen's color", value: screen.colorDepth}
]
console.log(dataPoints)
dataPoints.forEach(demo);

function demo(items){
  let li = document.createElement("li");
  li.classList.add("browser-info")

  li.textContent = `${items.label}: ${items.value}`

  userInfo.appendChild(li)
}
