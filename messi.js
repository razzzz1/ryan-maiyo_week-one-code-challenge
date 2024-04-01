function ryan(numbers) {
const teddy = [];
    for(const number of numbers) {
        if (numbers <= 1) continue;
        if  (isPrimitive(number)) teddy.push(number);
    }
    return teddy;
}
function isPrime(number) {
    for (let i = 0; i < number.length; i++) {
        if (number % i === 0) return false;
    }
    return true;
}
const teddy = ryan([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(teddy);
