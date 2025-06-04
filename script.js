document.addEventListener("DOMContentLoaded", function () {
  // if there's no submit button in html prevent the error message
  const sumButton = document.getElementById("sum");
  if (sumButton) {
    const calculator = new Calculator("num1", "num2", "results");

    sumButton.addEventListener("click", function () {
      calculator.calculateSum();
    });
  }

  // contact form
  if (document.getElementById("contactForm")) {
    const handler = new FormHandler("contactForm", "confirmation");
    handler.form.addEventListener("submit", function (e) {
      e.preventDefault();
      handler.validateAndSubmit(e);
    });
  }

  const qString = new URLSearchParams(location.search);
  const name = qString.get("name");
  const email = qString.get("email");
  const message = qString.get("message");

  const confirmation = document.getElementById("confirmationMessage");
  if (confirmation) {
    if (name && email && message) {
      confirmation.textContent = `Thank you, ${name}! We have received your message from ${email}: "${message}"`;
    } else {
      confirmation.textContent = "Missing form data.";
    }
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
