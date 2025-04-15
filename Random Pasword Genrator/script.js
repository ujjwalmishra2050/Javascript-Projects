const PasswordBox = document.querySelector('#password')
let length = 8
let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let number ="0123456789"
let Symbols = "!@#$%^&*()?/\|][{}`~-=_+"
let GeneratePass = document.querySelector('button')

let AllChars = UpperCase + lowercase + number + Symbols
 
function CreatePassword (){
    let password = ""
    password += UpperCase[Math.floor(Math.random() * UpperCase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += Symbols[Math.floor(Math.random() * Symbols.length)]

    while (length > password.length) {
        password += AllChars[Math.floor(Math.random() * AllChars.length)]
    }
    PasswordBox.value = password
}

function CopyPassword (){
    PasswordBox.select()
    document.execCommand('copy')
}


