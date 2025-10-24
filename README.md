🧠 1. JavaScript Dialog Boxes

There are three built-in pop-ups in JavaScript:

alert() – shows a simple message to the user.
👉 Example:

alert("Welcome to my website!");


prompt() – asks the user to type something (takes input).
👉 Example:

const name = prompt("Enter your name:");
console.log(name);


confirm() – asks a Yes/No question (returns true or false).
👉 Example:

const answer = confirm("Do you want to delete?");
console.log(answer);


⚙️ These pop-ups freeze your page (pause all code) until you click “OK” or “Cancel”.

🔁 2. Loops

A loop repeats some code again and again until a condition becomes false.

✅ for loop → runs a fixed number of times
for (let i = 0; i < 5; i++) {
  console.log(i);
}

✅ while loop → runs until a condition becomes false
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

🚨 3. What’s Wrong in this Code

This code: (===) //Condition always true if user type Sumaira ,

let studentName = prompt("enter your name");

while (studentName === "Sumaira") {
  studentName = prompt("enter your valid name");
  console.log(studentName)
}


🔍 Issue:

The logic is flipped!
This loop will only run if the name is “Sumaira”, and stop for any other name.

But your message says “enter your valid name” — so it sounds like you only want to reject "Sumaira" and accept others.

✅ Correct Version:
let studentName = prompt("Enter your name");

while (studentName !== "Sumaira") {
  studentName = prompt("Invalid name! Please enter a different name:");
}

alert(`Welcome ${studentName}!`);


🪄 Now it works like this:

If user types "another name", it keeps asking again.

If user types Sumaira, it stops and welcomes them.

💬 In short:

alert() → shows message

prompt() → takes input

confirm() → asks Yes/No

for → repeat known number of times

while → repeat until condition false

Your loop logic just needed a small tweak to make it match your intent.

*🪧 JavaScript Dialog Boxes*

alert() → Shows a message to the user.
prompt() → Asks the user to enter some input.
confirm() → Asks the user a Yes/No question and returns true or false.

*🔁 Loops*
for loop → Repeats code a set number of times until a condition becomes false.
while loop → Repeats code as long as a condition is true.
