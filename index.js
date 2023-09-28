//document.getElementById("increment-btn").addEventListener("click", increment)= 5
let countEl = document.getElementById("count-el") //.innerHTML ++
let saveEl = document.getElementById("save-el")
let count = 0

function increment(){
 count += 1;
 countEl.textContent = count
}

function save(){
    let countStr = count + " - "
     saveEl.textContent += countStr
     countEl.textContent = 0
     count = 0
}

/*let username = "per"
let message = "You have tree new notification"

let messageToUser = message + ", " + username + "!"

console.log(messageToUser)*/

/*let username = "Slim Shady"
let greeting = "Hi, my name is "
let myGreeting = greeting + ", " + "Chicky, chicky, "+ username + "!"
console.log(myGreeting)*/

/*let username = "Martez Carr"
let greeting = "Welcome Back "
let welcomeEl = document.getElementById("welcome-el")

welcomeEl.innerHTML = greeting + username*/



