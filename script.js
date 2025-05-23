document.addEventListener("DOMContentLoaded", function () {
  

  // if there's no submit button in html prevent the error message
  const sumButton = document.getElementById("sum");
  if (sumButton) {
    const calculator = new Calculator("num1", "num2", "results");

    sumButton.addEventListener("click", function(){
      calculator.calculateSum();
    })
  }

  let contactFormEl = document.getElementById("contactForm");
  let confirmation = document.getElementById("confirmation");

  // add event listener to form
  if (contactFormEl) {
    contactFormEl.addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
      let consent = document.getElementById("consent").checked;
      try {
        if (name === "" || email === "" || message === "") {
          throw new Error("Please fill out all the fields!");
        }
        if (!email.includes("@") || !email.includes(".")) {
          throw new Error("Please enter a valid email address.");
        }
        if (!consent) {
          throw new Error("You must agree to be contacted.");
        }
        confirmation.innerHTML = "Thank you for your message!";
        // reset form
        contactFormEl.reset();
      } catch (error) {
        confirmation.innerHTML = error.message;
      }
    });
    
  }

  // web privacy demo
  const userInfo = document.getElementById("userInfo");

  const dataPoints = [
    { label: "Check if browser is online", value: navigator.onLine },
    { label: "Language", value: navigator.language },
    { label: "Browser Information", value: navigator.userAgent },
    { label: "Width of the Screen", value: screen.availWidth },
    { label: "Height of the Screen", value: screen.availHeight },
    { label: "Depth of screen's color", value: screen.colorDepth },
  ];

  if (userInfo) {
  dataPoints.forEach(demo);
}

  function demo(items) {
    let li = document.createElement("li");
    li.classList.add("browser-info");

    li.textContent = `${items.label}: ${items.value}`;

    userInfo.appendChild(li);
  }

  const checkboxes = document.querySelectorAll("input[name='features']");
  const output = document.getElementById("selectedFeatures");
  const selected = [];

  if (!checkboxes.length) {
    console.warn("No feedback checkboxes found.");
    return;
  }

  if (!output) {
    console.warn("No output span found.");
    return;
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const value = checkbox.value;

      if (checkbox.checked) {
        if (!selected.includes(value)) {
          selected.push(value);
        }
      } else {
        const index = selected.indexOf(value);
        if (index !== -1) {
          selected.splice(index, 1);
        }
      }

      output.textContent = selected.length ? selected.join(", ") : "None";
    });
  });
});
