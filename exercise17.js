// Logic Challenge - Total Digit (Rekursif)
// Problem
// Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

// Contoh:

// 512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.

// Code
function totalDigitRekursif(angka) {
  var str = String(angka)
  if (str.length === 1){
    return angka
  }else {
    var awal = Number(str[0])
    var selain = Number(str.substring(1,str.length))
    return awal + totalDigitRekursif(selain)
  }
}


//cara 2 !!
// function totalDigitRekursif(angka) {
//   var strAngka = String(angka);
//   if(strAngka.length === 1){
//     return Number(angka)
//   }
  
//   return Number(strAngka[0]) + totalDigitRekursif(strAngka.substring(1,strAngka.length))
//   // you can only write your code here!


// cara slice !!
// function totalDigitRekursif(angka) {
//   var str = String(angka)
//   if (str.length === 0){
//     return 0
//   }
//   return Number(str[0]) + totalDigitRekursif(str.slice(1))
// }

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5