const accountId = 112
/* once the value is assigned it cannot be changed/ modified */

let accountName = "MahiTest"

var accountNumber = "988632767"
/* var is not supposed to be use as it's value change everytime we assign something to it  */

accountCity = "Nwd" 
//Once a value is assigned, the variable's type dynamically changes to match the type of the assigned value.

let accountState; //value will be undefined 

//this will print a single value 
console.log(typeof accountCity);

//this will print multiple values inside an array in tabular form 
console.table([accountId,accountName,accountNumber,accountState,accountCity]);