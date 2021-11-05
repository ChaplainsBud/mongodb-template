let userName; // how do I send this variable to MongoDB? 

let inp1 = document.querySelector('#user_name');
let log = document.querySelector('#log');
let inp2 = document.querySelector('#user_button');
let fm = document.querySelector('form');

inp1.style.backgroundColor = "skyblue";


fm.addEventListener('submit', (e) => {
    // e.preventDefault();
    console.log(`This was submitted: ${e.timeStamp}`)
    console.log(`This text was submitted: ${e.target.value}`)
})