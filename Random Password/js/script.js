
const password = document.getElementById("password");
const PASSWORD_LENGTH = 12;

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`"\'\\';
const allCharactersString = lowercaseLetters + uppercaseLetters + numbers + specialCharacters;
const characterArray = allCharactersString.split('');
const length = characterArray.length;

let motDePasseArray = [];


function createPassword() {
    motDePasseArray.length = 0;
    for ( let i = 0; i < PASSWORD_LENGTH; i++ ) {
        motDePasseArray.push( characterArray[  Math.floor(Math.random() * (length + 1)) ] );
    }
     return motDePasseArray.join('');
}

function showPassword() {
    password.value = createPassword();
}