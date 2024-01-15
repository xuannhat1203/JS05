let a = +prompt("Nhap so muon kiem tra");
let check = 1;
for(let i=2;i<a;i++){
    if(a%i==0){
        check = 2;
    }
}
if(check == 1){
    console.log("day la so nguyen to");
}