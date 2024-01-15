let a = +prompt("Nhập số a");
for(let j = 1; j <= a; j++){
  let count = 0;
  for (let i = 2; i < j; i++) {
    if (j % i === 0) {
      count = 1;
      break;
    }
  }
  if (count == 0 && j > 1) {
    console.log(j);
  } 
}
