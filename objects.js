class Calculator {
    constructor(num1, num2, output) {
        this.num1 = document.getElementById(num1);
        this.num2 = document.getElementById(num2);
        this.output = document.getElementById(output);
    }
}

Calculator.prototype.calculateSum = function(){
    let num1 = parseFloat(this.num1.value);
    let num2 = parseFloat(this.num2.value);

    if(isNaN(num1) || isNaN(num2)){
        this.output.innerHTML = "Please enter valid numbers.";
        return;
    }

    let sum = num1 + num2;
    this.output.innerHTML = "Sum: " + sum; 
}

class FormHandler {
    constructor(formId, confirmationId) {
        this.form = document.getElementById(formId);
        this.confirmation = document.getElementById(confirmationId);

    }
}
FormHandler.prototype.validateAndSubmit = function(event){
    event.preventDefault();

    let name = this.form.querySelector("#name").value;
    let email = this.form.querySelector("#email").value;
    let message = this.form.querySelector("#message").value;
    let consent = this.form.querySelector("#consent").checked;

    try{
        if(!name || !email || !message){
            throw new Error("Please fill out all the fields!");
        }
        if(!email.includes("@") || !email.includes(".")){
            throw new Error("Please enter a valid email address.");
        }
        if(!consent){
            throw new Error("You must agree to be contacted.");
            
        }
        this.confirmation.innerHTML = "Thank you for your message!";
        this.form.reset();
    } catch(error){
        this.confirmation.innerHTML = error.message;
    }

}