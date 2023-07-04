const captcha = document.querySelector('.captcha');
const reloadBtn = document.querySelector('.reload_btn');
const inputField = document.querySelector('input');
const checkBtn = document.querySelector('.check_btn');
const statusTxt = document.querySelector('.status_txt');

//allCharacters allowed in the captcha
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getCaptcha() {
    for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
        let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += ` ${randomChar}`;
    }
}
reloadBtn.addEventListener('click', ()=> {
    captcha.innerText = '';
    getCaptcha();
})

checkBtn.addEventListener('click', e => {
    e.preventDefault();
    statusTxt.style.display = 'block';
    //adding space after each value of user entered captcha because of the spaces already here
    let inputVal = inputField.value.split('').join(' ');
    if(inputVal == captcha.innerText) {
        statusTxt.style.color = '#4db2ec';
        statusTxt.innerText = 'You are not a robot.';
        setTimeout(() => {
            statusTxt.style.display = 'block';
            inputField.value = '';
            captcha.innerText = '';
            getCaptcha();
        }, 4000) //removing user entered value and captcha innerText after 4 seconds
    } else {
        statusTxt.style.color = '#ff0000';
        statusTxt.innerText = 'Captch not matched. Please try again !';
    }
})