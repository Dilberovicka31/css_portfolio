function calculateSum(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("results").innerHTML = "Sum: " + sum;
    
}
const sumButton = document.getElementById("sum");
if (sumButton) {
    sumButton.addEventListener("click", calculateSum);
}

document.getElementById("contactForm").addEventListener('submit', function(e){
    e.preventDefault()

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

    if (name === "" || email === "" || message === ""){
        alert("Please fill out all the fields.")
    }
    else{
        
    }
})