
// a=5;
// b=6;
// c=7;
// d=8;
// e=9;
// alert(a+c);
// console.log(b-a);
// console.warn(c*e);
// document.write(d/b);

// var a=parseInt(prompt("enter num1"));

// var b=parseInt(prompt("enter num1"));
// document.write(a+b);
// var a=parseFloat(prompt("enter num1"));
// var b=parseFloat(prompt("enter num1"));
// document.write(a+b);

// var a=prompt("enter num");
// if(a==="10"){
//   document.write("number is equal to 10");
// }
// else{
//   document.write("number is no equal to 10");
// }

// var a=prompt("enter num");
// if(a==="15"){
//   document.write("number is equal to 15");
// }
// else{
//   document.write("number is no equal to 15");
// }

// var a=6;
// var b=5;
// if((a==6) && (b==5)){
//   document.write("true");
// }
// else{
// document.write("false");
// }
// document.write("hello world"+"<br>");
// document.write("hello world");
// document.write("hello world");
// document.write("hello world");
// document.write("hello world");
// document.write("hello world");
// for(a=1;a<11;a++){
//   document.write("hello world"+"<br>")
// }
// for(a=1;a<=10;a++){
//   document.write("2 *"+a+"="+a*2+"<br>");
// }
// var a=0;
// while (a<5){
//   document.write("hello"+"<br>")
//   a++;
// }
// function greet(){
//     alert("form submitted");
// }
// greet();
// greet();
// greet();
// function greet(a,b){
//     alert(a+b);
// }
// greet(2+2);
// var c=parseInt(prompt("enter value"));
// var d=parseInt(prompt("enter value"));
// function greet(c+d){
// alert(c+d);
// }
// greet(c,d);

// var a = prompt("enter code");
// function greet() {
//     alert("hello world");
// }

// if (a === "hello") {
//     for (i = 0; i <= 3; i++) {
//         greet();
//     }
// }
// else {
//     document.write("string not matched");
// }
// var a= parseInt(prompt("enter value"));
// function numbersum (n){
//     var sum=0;
//     var i=0;
//     while(i<=n){
//         sum=sum+i;
//         i++;
//     }
//     document.write("the sum of "+n+"is"+sum);
// }
// numbersum (a)



// var a = parseInt(prompt("enter value"));
// function numbersum(n) {
//     var sum = 1;
//     var i = 1;
//     while (i <= n) {
//         sum = sum * i;
//         i++;
//     }
//     document.write("the sum of " + n + "is" + sum);
// }
// numbersum(a)

// var a = parseInt(prompt("enter value"));
// function numbersum(n){
//     var sum = 1;
//     if(n%2==0){
//     var i = 1;

//     while (i <= n) {
//         sum = sum*i;
//         i++;
//     }
//     document.write("the sum of"+n+"is"+sum);
// }
// else{
//     document.write("number is odd");
// }
// }
// numbersum(a);

// var a = parseInt(prompt("enter value"));
// switch(a){
//     case 1 :
//         document.write("monday");
//         break;
//     case 2 :
//         document.write("tuesday");
//         break;
//     case 3 :
//         document.write("Wednesday");
//         break;
//     case 4 :
//         document.write("thursady");
//         break;
//     case 5 :
//         document.write("friday");
//         break;
//     default:
//         document.write("invalid")
// }

// var a=prompt("enter value");
// switch(a%2){
//     case 0 :
//   document.write("number is even");
//   break;
//   case 1 :
//  document.write("number is odd");
//  break;
//   default:
//     document.write("invalid");
// }

// var a=parseInt(prompt("enter value"));
// if((a%3==0) && (a>30)){
//   document.write("number is divisble by 3 and greater than 30"+"<br>");
//   }
//   if((a%5==0) && (a>50)){
//     document.write("number is divisble by 5 and greater than 50"+"<br>");
//   }




// var a=6;
// var b=5;
// if((a==6) && (b==5)){
//   document.write("true");
// }
// else{
// document.write("false");
// }

// var a=[
//   [1,7,3],
//   [6,8,77],
//   [90,45,3]
// ]
// document.write(a[2][0])

// var array = [
//   [
//     [1,7,3],
//     [6,8,77],
//     [90,46,6]
//   ],
//   [
//     [6,56,23],
//     [54,7,9],
//     [3,2,1]
//   ],
//   [
//     [23,4,87],
//     [25,3,6],
//     [47,"aatika",7]
//   ]
// ]
// document.write(array[2][2][1])

// remove the last element of the array
// var a=["A","B","C"];
// a.pop();
// document.write(a)

// add item in the last of the array
// let b=["ruqaiya","aatika"]
// b.push("batch2406f1")
// document.write(b)

// remove item in the start of the array
// let c=["A","B","C"];
// c.shift();
// document.write(c)

// add item in the start of the Array
//  d=["A","B","C"];
// d.unshift("Z");
// document.write(d)

// sort the array
// var num=[3,2,4,1],str=["D","A","B","C"];
// document.write(num.sort());
// document.write(str.sort());

// remove the element with the index number and add new members
// var num=["a","b","c","d"];
// num.splice(0,4,"aatika");
// document.write(num)

// var value=10;
// var array=[];
// for(var i=0;i<5;i++);{
//   array.push(value);
// }
// document.write(array);



// var array=[];
// for (var i=0;i<5;i++){
// var value=prompt("enter value")
// array.push(value);
// }
// document.write(array);

var b = prompt("enter value");
var array = [];
for (var i = 0; i < b; i++) {
  var value = prompt("enter value")
  array.push(value);
}
document.write(array);