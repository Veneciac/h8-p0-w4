
// Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.

function angkaPrima(angka) {
  //var pembagi = [2, 3, 5, 7]
  if (angka > 10 && angka %2 !==0 && angka%3 !== 0 && angka %5 !== 0 &&angka % 7 !== 0 ){
    return true
  }else if (angka < 10 && angka%2 !== 0){
    return true
  }else {
    return false
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false