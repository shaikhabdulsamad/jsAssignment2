// *************************** Chapter : 9-11 ******************************


// ******************** Task : 01 ***********************

// var a = prompt('Enter your city name');

// if(a === 'karachi'){
//     alert('welcome to city of lights')
// }
//
// ******************** Task : 02 ***********************

// var a = prompt('Enter your gender');

// if(a === 'male'){
//     alert('Good morning sir')
// }
// if(a === 'female'){
//     alert('Good morning madam')
// }


// ******************** Task : 03 ***********************

// var a = prompt('Enter traffic light color');

// if(a === 'red'){
//     alert('must stop')
// }
// if(a === 'yellow'){
//     alert('ready to move')
// }
// if(a === 'green'){
//     alert('move now')
// }


// ******************** Task : 04 ***********************

// var a = prompt('Enter your car fuel');

// if(a === '0.25'){
//     alert('Please refill the fuel in your car')
// }


// ******************** Task : 05 ***********************

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }


// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    


// ******************** Task : 06 ***********************

// var a = prompt('Enter your obtain marks');
// var b = prompt('Enter total marks');
// var c = a/b*100

// if(c === 80 || c > 80 ){
//     document.write("<h1>Mark Sheet</h1>" +
//      "<br> Total marks : " + b +
//      "<br> Obtain marks : " + a +
//      "<br> Percentage : " + c +
//      "<br> Grade : A1" +
//      "<br> Remarks : Excellent") 
// }

// else if(c < 80 && c > 69 ){
//     document.write("<h1>Mark Sheet</h1>" +
//      "<br> Total marks : " + b +
//      "<br> Obtain marks : " + a +
//      "<br> Percentage : " + c +
//      "<br> Grade : A" +
//      "<br> Remarks : Good") 
// }
// else if(c < 70 && c > 59 ){
//     document.write("<h1>Mark Sheet</h1>" +
//      "<br> Total marks : " + b +
//      "<br> Obtain marks : " + a +
//      "<br> Percentage : " + c +
//      "<br> Grade : B" +
//      "<br> Remarks : You need to work hard") 
// }
// else if(c < 60 && c > 49 ){
//     document.write("<h1>Mark Sheet</h1>" +
//      "<br> Total marks : " + b +
//      "<br> Obtain marks : " + a +
//      "<br> Percentage : " + c +
//      "<br> Grade : C" +
//      "<br> Remarks : Very Poor Result") 
// }
// else{
//     document.write("<h1>Mark Sheet</h1>" +
//      "<br> Total marks : " + b +
//      "<br> Obtain marks : " + a +
//      "<br> Percentage : " + c +
//      "<br> Grade : Null" +
//      "<br> Remarks : Fail") 
// }


// ******************** Task : 07 ***********************

// var a = 7;
// var b = +prompt('Guest a secret number', 'range form 1-10');

// if(b === a){
//     alert('Bingo! Correct answer')
// }
// if(b === ++a){
//     alert('Close enough to the correct answer')
// }


// ******************** Task : 08 ***********************

// var a = prompt('Enter number divisible by 3');

// if(a % 3 == 0){
//         alert(a + " is divisible by 3");
//     }


// ******************** Task : 09 ***********************

// var a = prompt("Enter a number: ");

// if(a % 2 == 0) {
//     alert("The number is even.");
// }

// else {
//     alert("The number is odd.");
// }


// ******************** Task : 10 ***********************


// var a = prompt("Enter temperature");

// if(a > 40) {
//     alert("It is too hot outside.");
// }

// else if(a > 30){
//     alert("The Weather today is Normal.")
// }
// else if(a > 20){
//     alert("Today’s Weather is cool.")
// }
// else if(a > 10){
//     alert("OMG! Today’s weather is so Cool.")
// }

// else {
//     alert("Ooooo")
// }


// ******************** Task : 11 ***********************

// var a = +prompt("Enter first number");
// var b = +prompt("Enter second number");
// var c = prompt("Enter calculation operator");

// if(c == '+'){
// alert(a + b);
// }
// else if(c == '-'){
//     alert(a - b);  
// }
// else if(c == '*'){
//     alert(a * b);  
// }
// else if(c == '/'){
//     alert(a / b);  
// }
// else{
//     alert('something went wrong')
// }




// *************************** Chapter : 12-13 ******************************


// ******************** Task : 02 ***********************

// var a = prompt("Enter number1");
// var b = prompt("Enter number2");

// if(a > b){
// alert(a + ' is greater')
// }
// else if(a < b){
// alert(b + ' is greater')
// }
// else{
//     alert('both are equal')
// }



// ******************** Task : 03 ***********************


// var a = prompt("Enter number");

// if(a < 0){
//     alert('number is negative')
// }
// else if(a == 0){
//     alert('number is zero')
// }

// else{
//     alert('number is positive')
// }


// ******************** Task : 05 ***********************

// var a = prompt('Enter your password');
// var b = 'myPassword';
// if(a == ''){
//     alert(' Please enter your password')
// }
// else if(a == b){
//     alert('Correct! The password you entered matches the original password')
// }
// else{
//     alert('Incorrect password')
// }


// ******************** Task : 06 ***********************
// var greeting;

// var hour = 13;

// if (hour < 18) {
// greeting = "Good day";
// }
// else{
//     greeting = "Good evening";
// }

// alert(greeting);


// ******************** Task : 07 ***********************

// var a = prompt('Enter time');

// if(a == '0000'){
//     alert('12am')
// }
// else if(a == '0100'){
//     alert('1am')
// }
// else if(a == '0200'){
//     alert('2am')
// }
// else if(a == '0300'){
//     alert('3am')
// }
// else if(a == '0400'){
//     alert('4am')
// }
// else if(a == '0500'){
//     alert('5am')
// }
// else if(a == '0600'){
//     alert('6am')
// }
// else if(a == '0700'){
//     alert('7am')
// }
// else if(a == '0800'){
//     alert('8am')
// }
// else if(a == '0900'){
//     alert('9am')
// }
// else if(a == '1000'){
//     alert('10am')
// }
// else if(a == '1100'){
//     alert('11am')
// }
// else if(a == '1200'){
//     alert('12pm')
// }
// else if(a == '1300'){
//     alert('1pm')
// }
// else if(a == '1400'){
//     alert('2pm')
// }
// else if(a == '1500'){
//     alert('3pm')
// }
// else if(a == '1600'){
//     alert('4pm')
// }
// else if(a == '1700'){
//     alert('5pm')
// }
// else if(a == '1800'){
//     alert('6pm')
// }
// else if(a == '1900'){
//     alert('7pm')
// }
// else if(a == '2000'){
//     alert('8pm')
// }
// else if(a == '2100'){
//     alert('9pm')
// }
// else if(a == '2200'){
//     alert('10pm')
// }
// else if(a == '2300'){
//     alert('11pm')
// }
// else('something went wrong!')