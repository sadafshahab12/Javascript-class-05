// prompt , confirm, alert
// model dialogs , javascript built-in function
// pop-up --> jb tk hm isko ok nh krty hmara code freeze rehta
// prompt takes input from user
// const studentName = prompt("Enter your name");
// console.log(`Students Name: ${studentName}`); // interpolation
// console.log("Students Name: " + studentName); // concatenation

// alert --> koi message user ko show krwany k lea hm alert use krty hn
// const isSubmitted = false;
// if (isSubmitted) {
//   alert("Your form is submitted successfully");
// } else {
//   alert("Your form is not submitted successfully");
// }

// confirm --> user se koi bhi sawal puchna ho yes/no --> (true or false )
// const deleteTask = confirm("Are you sure you want to delete task?");
// console.log(deleteTask);

//loops --> for, while
// loops --> doing any task repeatedly
// for loops --> jb tk hmari condition false nh hojati loop run krta rahega

// for (let i = 0; i < 10; i++) { 0 - 9
//   console.log(i);
// }
// const studentName = "Resham khan";
// const arr = [1,2,3,4,5];
// console.log("array length", arr.length)
// console.log("length: " , studentName.length)
// for (let i = 0; i < studentName.length; i++) {
//                 // 0 < 6
//   console.log(studentName[i]);
// }
// while --> jb tk condition false na hojae hmara loop chlta rahega , lekin hmara loop kb tk run krega ye hmn exactly pta nh hota ye user value depend loop
let studentName = prompt("enter your name");

while (studentName !== "Sumaira") {
  studentName = prompt("enter your valid name");
}
console.log(studentName);
