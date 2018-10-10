//Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.


function hitungHuruf(kata) {
  var arr = kata.split(' ');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if () {
        return arr[i];
      }
    }
  }
}
// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau

// cara 2
// var arr = kata.split(' ');
// var pembanding = 0;
// var index;
// for(var i = 0; i < arr.length; i++){
//   var ulang = 0;

//    for (j = 0; j < arr[i].length; j++){
     
//      for (k = arr[i].length -1; k >= 0; k--){

//        if (arr[i][j] === arr[i][k] && j !== k){
//        ulang++
//         } 
//       }
//    }

//   if (ulang > pembanding){
//   pembanding = ulang
//   index = i
//   }
// } 
// return arr[index]