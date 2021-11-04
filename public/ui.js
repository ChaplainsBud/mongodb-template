let userName; // how do I send this variable to MongoDB? 

let inp1 = document.querySelector('#user_name');
let log = document.querySelector('#log');
let inp2 = document.querySelector('#user_button');
let fm = document.querySelector('form');

inp1.style.backgroundColor = "skyblue";

// Alert: must push 'return' to enter input data, not just a keydown
// inp1.addEventListener('change', (e) => {
    
//     console.log(e.target.value);
//     log.textContent = e.target.value;
//     userName = e.target.value;
//     console.log(`The userName is now ${userName}`);

// })


fm.addEventListener('submit', (e) => {
    // e.preventDefault();
    console.log(`This was submitted: ${e.timeStamp}`)
    console.log(`This text was submitted: ${e.target.value}`)
})