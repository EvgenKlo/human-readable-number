module.exports = function toReadable (number) {
    const arrZeroTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arrDozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const numberInMassive = String(number).split('');
    let output;
    console.log(numberInMassive);
    if (numberInMassive.length === 3 && number % 100 > 19 && number % 10 !== 0){
        output = `${arrZeroTwenty[numberInMassive[0]]} hundred ${arrDozens[numberInMassive[1]]} ${arrZeroTwenty[numberInMassive[2]]}`;
    } else if (numberInMassive.length === 3 && number % 100 > 19 && number % 10 === 0){
        output = `${arrZeroTwenty[numberInMassive[0]]} hundred ${arrDozens[numberInMassive[1]]}`;
    } else if (numberInMassive.length === 3 && number % 100 === 0){
        output = `${arrZeroTwenty[numberInMassive[0]]} hundred`;
    } else if (numberInMassive.length === 3 && number % 100 <= 19 && number % 10 !== 0){
        output = `${arrZeroTwenty[numberInMassive[0]]} hundred ${arrZeroTwenty[number % 100]}`;
    } else if (numberInMassive.length === 2 && number > 19 && number % 10 !== 0){
        output = `${arrDozens[numberInMassive[0]]} ${arrZeroTwenty[numberInMassive[1]]}`;
    } else if (numberInMassive.length === 2 && number > 19 && number % 10 === 0){
        output = `${arrDozens[numberInMassive[0]]}`;
    } else if (numberInMassive.length === 2 || numberInMassive.length === 1 && number <= 19){
        output = `${arrZeroTwenty[number]}`;
    } else if (numberInMassive.length === 3 && number % 100 === 10){
        output = `${arrZeroTwenty[numberInMassive[0]]} hundred ${arrDozens[numberInMassive[1]]}`;
    };
    return output;
};


console.log(module.exports(911));
