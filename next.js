function boy(start, end) {
    const direction = start <= end ? 1 : -1;
    const length = Math.abs(end - start) +1;
    return Array.from({ length }, (_, i) => start + i * direction);
}
const girl = boy(4, 7);
console.log(girl);
const  girl2 = boy(-4, 7);
console.log(girl2);
