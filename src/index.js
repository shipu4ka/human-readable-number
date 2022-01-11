const oneDigit = (number) => {
    switch (number) {
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case 0:
            return "";
    }
};
const twoDigits = (number) => {
    switch (number) {
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 15:
            return "fifteen";
        case 18:
            return "eighteen";    
        default:
            return `${oneDigit(number % 10)}teen`;
    }
};
const dozens = (number) => {
    switch (number) {
        case 20:
            return "twenty";
        case 30:
            return "thirty";
        case 40:
            return "forty";
        case 50:
            return "fifty";
        case 80:
            return "eighty";    
        default:
            return `${oneDigit(Math.floor(number / 10))}ty`;
    }
};
const threeDigits = (number) => {
    return `${oneDigit(Math.floor(number / 100))} hundred`;
};

module.exports = function toReadable(number) {
    if (number === 0) {return "zero";
    } else if (number < 10) {
        return oneDigit(number);
    } else if (number > 9 && number < 20) {
        return twoDigits(number);
    } else if (number > 19 && number < 100) {
        return `${dozens(Math.floor(number / 10) * 10)} ${oneDigit(number % 10)}`.trim();
    } else if (number > 99 && number < 1000) {
        let tmp = number % 100;
        if (tmp < 10) {
            return `${threeDigits(Math.floor(number / 100) * 100)} ${oneDigit(number % 10)}`.trim()
        } else if (tmp > 9 && tmp < 20) {
            return `${threeDigits(Math.floor(number / 100) * 100)} ${twoDigits(tmp)}`
        }
        return `${threeDigits(Math.floor(number / 100) * 100)} ${dozens((Math.floor((number % 100) / 10) * 10))} ${oneDigit(number % 10)}`.trim();
    }
};
