const button = document.querySelector('button');
button.addEventListener('click', setBackgroundColor);
button.addEventListener('click', generateColor);




function setBackgroundColor(){
    // document.body.style.backgroundColor = '#00334C';
    document.body.style.background = generateColor();
}

function generateColor(){
    const alphabet = "ABCDEF"
    const num = Math.floor(Math.random() * 900) + 100;
    const letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    //  console.log(`#00${num}${letter}`);
    return `#00${num}${letter}`;
}




