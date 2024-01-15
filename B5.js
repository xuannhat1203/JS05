let n = +prompt("Nhập số n");
let sum = 0;
for(let i = 1; i <= n; i++){
    sum += 1 / (i ** 3);
}
console.log(`Tổng là ${sum.toFixed(5)}`);