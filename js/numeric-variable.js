//Create three variables to store infomation needed
let price, quantity, total;

//Assign values to the price and quantity variables
price = 99;
quantity = 4;

//Calculate the price
total = price * quantity;

let costElem = document.getElementById("cost");
costElem.textContent = '$'+total;



