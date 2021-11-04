let userName; // how do I send this variable to MongoDB? 

let inp1 = document.querySelector('input');
let log = document.querySelector('#log');

inp1.style.backgroundColor = "skyblue";

// Alert: must push 'return' to enter input data, not just a keydown
inp1.addEventListener('change', (e) => {

    console.log(e.target.value);
    log.textContent = e.target.value;
    userName = e.target.value;
    console.log(`The userName is now ${userName}`);

})

