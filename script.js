// 01 Declare a variable city and assign it the name of your favorite city.

let city = "Tokyo"
console.log(city)

// 02 Create a variable year and set it to the current year.
let year = 2025
console.log(year)

// 03 Declare a let variable called counter, set it to 0, then increase it by 5.
let counter = 0
console.log(counter+5)

// 04 Declare a const variable PI with a value of 3.14159 and try changing it. What happens?
const PI = 3.14159
console.log(PI)
// PI = 3.14 // Error type in the console, since it's a constant variable, the value cannot be reassigned to a different value

// 05 Swap the values of two variables a and b.

let a = 2
let b = 5
let temp

temp = a
a = b
b = temp
console.log(a)
console.log(b)

//OR

let c = 9, d = 11;
[c, d] = [d, c]; // Swaps values without needing a temp variable
console.log(c, d);

// 06 Store your full name in a variable and print "Hello, [name]!" using it.
let fullName = "Jas"
console.log("Hello, " + fullName + "!" )

// 07 Assign a string "10" to a variable and convert it to a number.
const quantity = "101.90"
console.log(Number(quantity, 10))

// 08 Declare a variable without assigning a value, then assign it later.
let assignLater
assignLater = "This value is assigned now"
console.log(assignLater)

// 09 Declare a boolean variable that holds true or false.
let myFirstBoolean = true
console.log(myFirstBoolean)

// 10 Concatenate three strings together and store them in a new variable.
let fruitOne = "apple"
let fruitTwo = "banana"
let fruitThree = "orange"
let fruits = fruitOne + " " + fruitTwo + " " + fruitThree
console.log(fruits)