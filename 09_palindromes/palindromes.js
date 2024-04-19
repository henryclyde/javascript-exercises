const palindromes = function (item) {

    let newString = item.toLowerCase().split('').filter((char) => "abcdefghijklmnopqrstuvwxyz0123456789".includes(char)).join("");
    if (newString == newString.split('').reverse().join("")) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
