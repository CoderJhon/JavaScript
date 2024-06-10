/*

How to accept user input

1. easy way = window prompt
2. Professional way = HTML textbox

EASY WAY:

let username;

username = window.prompt("What's your username?")

console.log(username)

PROFESSIONAL WAY:

*/
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}