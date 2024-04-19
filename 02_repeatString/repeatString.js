const repeatString = function (word = 'hey', times = 3) {
    if (times < 0) {
        return 'ERROR';
    }
    let phrase = "";
    for (let i = 0; i < times; i++) {
        phrase += word;
    }
    return phrase;
};

// Do not edit below this line
module.exports = repeatString;
