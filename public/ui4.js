// same as ui.js -> could I use just one script for all four Mongo CRUD functions? 

let userName; // how do I send this variable to MongoDB? 

let inp1 = document.querySelector('#user_name');
let log = document.querySelector('#log');
let inp2 = document.querySelector('#user_button');
let fm1 = document.querySelector('#form1');
let fm2 = document.querySelector('#form2');

inp1.style.backgroundColor = "skyblue";


fm2.addEventListener('submit', (e) => {
    // e.preventDefault();
    console.log(`This was submitted: ${e.timeStamp}`)
    console.log(`This text was submitted: ${e.target.value}`)
})

// Repeated for Update Below:

let userName; // how do I send this variable to MongoDB? 

let inp1 = document.querySelector('#user_name1');
let inp2 = document.querySelector('#user_name2')
let log = document.querySelector('#log2');
let inp3 = document.querySelector('#user_button');
let fm = document.querySelector('form');

inp1.style.backgroundColor = "skyblue";


fm1.addEventListener('submit', (e) => {
    // e.preventDefault();
    console.log(`This was submitted: ${e.timeStamp}`)
    console.log(`This text was submitted: ${e.target.value}`)
})