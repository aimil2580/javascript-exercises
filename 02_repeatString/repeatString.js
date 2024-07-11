const repeatString = function(word, times) {
    if(times < 0) return "ERROR";
    let myWord = "";
    for(let i=0; i<times; i++){
        myWord += word;
    }
    return myWord;
};

// Do not edit below this line
module.exports = repeatString;
