const palindromes = function (str) {
    //remove any non string/num
    let original = str.toLowerCase().replaceAll(".", "").replaceAll("!", "").replaceAll(", ", "").replaceAll(" ", "");
    //save the reversed string in an array
    let reversedStr = original.split('').reverse().join('');
    // //compare the arrays
    if (reversedStr == original) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
