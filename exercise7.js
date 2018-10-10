//Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.


function digitPerkalianMinimum(angka) {
  var nampung = []
  var result = []
  for (var i = 1 ; i <= angka ; i ++){
    if(angka % i === 0 && i <= (angka /i) ){
      nampung.push(String(i) + String(angka/i))
      //result.push(String[i].length)
    }
    //result.push(nampung[i].length)
  }
  for(var j = 0 ; j < nampung.length ; j++){
    result.push(nampung[j].length)
  }
  //result.sort(function(a,b) {return a-b})
  var hasil = result.sort(function(a,b) {return a-b})
  //result.push('venecia')
  var akhir = hasil[0]
  return akhir
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2