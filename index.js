// Your code goes here
const text=document.getElementById('text');
document.addEventListener("DOMContentLoaded", function() {
  text.innerHTML=""
});
 
console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);