const palindromes = function (str) {
    const aplhanum = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let strCorrect = str.toLowerCase().split("").filter((char) => aplhanum.includes(char)).join('')
    let strrev = strCorrect.split('').reverse().join('')
    return strCorrect === strrev  
};

// Do not edit below this line
module.exports = palindromes;
