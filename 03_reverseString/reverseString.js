const reverseString = function(word) {
    revWord = "";
    for (i of word){
        revWord = i + revWord;
    }
    return revWord;
};

// Do not edit below this line
module.exports = reverseString;
