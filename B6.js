let a =+prompt("Nhap so a");
let b = 0;
while( a > 0){
    b  = b * 10 + a % 10;
    a = Math.floor(a / 10);
}
console.log(b);