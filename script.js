/*

// Opdracht 1 - Checking if a number is big

const check = function(number) {
    if (number > 100) {
        return "true";
    }
    return "false";
};

const result = check(150);
console.log(result);

// Opdracht 2 - Bouncer at a club

const bouncer = function(age, people) {
    if (age < 21) {
        return "This is a club for adults";
    }
    if (people < 250) {
        return "Come in";
    }
    if (people >= 250) {
        return "It's too busy now, come back later";
    }
};

const result = bouncer (23, 167);
console.log(result);

*/

// Opdracht 3 - Calculating the average

const average = function(number1, number2, number3, number4, number5) {
    const sum = (number1 + number2 + number3 + number4 + number5) / 5;
    return sum;
};

const result = average(7, 32, 89, 17, 24);
console.log(result);