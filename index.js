

// QUESTION---1

// Even Number---

          
// var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// b = [];
// for (var i = 1; i < a.length; i++) { 
// if ((a[i] % 2) === 0) {
//     b.push(a[i]);
// }
// }
// console.log(b)





// -------------------------

// QUESTION---2

// Input: [1,1,0,0,1,0,0,1,1,1,1]
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 4. 



// ----------------------------------------

// QUESTION---3


// const a = [4,3,6,3,4,3,3,]

// function count_duplicate(a){
//  let counts = {}

//  for(let i =0; i < a.length; i++){ 
//      if (counts[a[i]]){
//      counts[a[i]] += 1
//      } else {
//      counts[a[i]] = 1
//      }
//     }  
//     for (let prop in counts){
//         if (counts[prop] >= 2){
//             console.log(prop + " counted: " + counts[prop] + " times.")
//         }
//     }
//   console.log(counts)
// }
// count_duplicate(a)


// Remove Duplicate from array--------



// var arr=["banana","mango","apple","grapes","banana"];
// function removeduplicate(data){
//     return[...new Set(data)]
// }
// console.log(removeduplicate(arr))




// --------------------------------------------

// QUESTION---4

// fetch('www.example.com/api/get/1')
// .then((apidata) => {
//     console.log(apidata);
//     return apidata.json()
// })

// .then((data) => {
//     console.log(data);
// })




// --------------------------------------





// Swap the value without using third Variables..

// let a=2;
// let b=4;
// [a,b]=[b,a]
// console.log(b)
// console.log(a)


// ASCENDING ORDER------

// var numArray = [13,140000, 104, 99,10];
// numArray.sort(function(a, b) {
//   return a - b;
// });
// console.log(numArray);



// Descending Order------

// var numArray = [13,140000, 104, 99,10];
// numArray.sort(function(a, b) {
//   return b-a;
// });
// console.log(numArray);




// Even Number-----

// var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// b = [];
// for (var i = 1; i < a.length; ++i) { 
// if ((a[i] % 2) === 0) {
//     b.push(a[i]);
// }
// }
// console.log(b)



// ODD Number+---------

// var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// b = [];
// for (var i = 1; i < a.length; ++i) { 
// if ((a[i] % 2) !== 0) {
//     b.push(a[i]);
// }
// }
// console.log(b)






// To remove duplicate no. character in array---

// let chars = ['A', 'B', 'A', 'C', 'B'];
// let uniqueChars = [...new Set(chars)];
// console.log(uniqueChars);






// Reverse of an Array---------------------

// let arr=[1,2,3,4,5]
// arr.reverse()
// console.log(arr)


// Rotating a Number --------------

// const rotate = (arr, count ) => {
//     return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
//   };
  
//   const arr = [1,2,3,4,5];
  
//   console.log(rotate(arr, 1));  // [2, 3, 4, 5, 1]
//   console.log(rotate(arr, 2));  // [3, 4, 5, 1, 2]
//   console.log(rotate(arr, -2)); // [4, 5, 1, 2, 3]
//   console.log(rotate(arr, -1)); // [5, 1, 2, 3, 4]




// Rotating a String ----------------------


// const rotates = (arr, count ) => {
//     return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
//     };
    
//     const arr = ["suprava","priya","darshani","sahoo"];
    
//     console.log(rotates(arr, 2)); 


// For Loop---------

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
 



// For Loop Star Pattern---------

// for(var i=1; i<=4; i++){
//     console.log("*".repeat(i));
//  }




// For Each---------


// var fruits = ["apple", "orange", "cherry"];
// fruits.forEach(function(element,index){
// console.log(element,index)
// })


// let arr=[2,4,5,6,7]
// arr.forEach(function(element){
//     console.log(element)
// })


// Function


// Normal function---

// function say(){
//     console.log("sumit sharma")
// }
// say()



// let name="sumit"
// let thanks="Thanks a Lot"
// function greet(name,thanks){
// console.log(`Happy Holi ${name} reply ${thanks}`)
// }
// greet(name,thanks)




// Arrow function---

// let say=()=>{
//     console.log("hello sumit sharma")
// }
// say()


// Anonymus  Function---

// An anonymous function is a function without a name.
// we need to call the anonymous function later, we assign the function to the show variable.


// let show=function (){
//     console.log("This is Anonymus Function")
// }
// show()




// setTimeout(function () {
//     console.log('Execute later after 1 second')
// }, 1000);





// IIFE--

// An Immediately-invoked Function Expression (IIFE for friends) is a way to execute functions immediately, as soon as they are created.
//  IIFEs are very useful because they don't pollute the global object, and they are a simple way to isolate variables declarations

// (function(){
//         console.log("This is IIFE ")
//     })
// ()


// Advance J.S--



// Closure----

// Closure in action i.e inner function can have access to the outer function variable/parameter as well as all the global variables.


// let first=(a)=>{
//     let b=20;
//     let second=()=>{
//         let sum=a+b;
//         console.log(sum)
//     }
//     second()
// }
//     first(10)



// Call---

// It is a  predefined J.S method.
// With Call() an object can use a method belonging to another object.

// let firstlist={
//     area:'delhi',
//     cases:22,
//     order:function(){
//         console.log(`The total required item are ${this.item} and It will be available ${this.available} at ${firstlist.area}`)
//     }
// }
// let quantity={
//     item:'mango',
//     quality:'average',
//     available:'tomorrow'
// }
//  firstlist.order.call(quantity,2)



// Apply--

// It is similar to call method.
// The call() method takes arguments separately
// The apply() method takes arguments as an array


// let firstlist={
//     area:'delhi',
//     cases:22,
//     order:function(rating,support){
//         console.log(`The total required item are ${this.item} and It will be available ${this.available} at ${firstlist.area}.
//         This will be rating ${rating} ${support}`)
//     }
// }
// let quantity={
//     item:'mango',
//     quality:'average',
//     available:'tomorrow'
// }
//  firstlist.order.apply(quantity,[2,'always with you'])



























