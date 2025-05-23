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