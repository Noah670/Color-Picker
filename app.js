const colors = ["green", "pink", "purple", "red", "green", "blue", "rgba(255, 166, 71)", "#20B2AA"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Listenter for click events
btn.addEventListener('click', function() {
    // create a number between 0 and 8
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// function to get a number number from the colors array size

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}