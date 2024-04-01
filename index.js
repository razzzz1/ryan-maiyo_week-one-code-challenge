function swap(str) {
    return str.split('').map(char => {
        return char === char.toUpperCase()? char.toLowerCase() : char.toUpperCase();
    }).join(' ');
}
const swapString =  swap('The quick brown fox ');
console.log(swapString);
