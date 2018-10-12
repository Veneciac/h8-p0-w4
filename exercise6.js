//Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.



function hitungHuruf(kata) {
  var katasplitted = kata.split(' ')
  //console.log(katasplitted)
  var max = 0
  var result ;
  for (var i = 0 ; i < katasplitted.length ; i++){
    var unik = [] 
    var freq = []
    for (var j = 0 ; j < katasplitted[i].length ; j++){
      // console.log(katasplitted[i][j]) == buat cek katanya ad smua 
      var cek = true
      for ( var k = 0 ; k <unik.length ; k++){
        // console.log(katasplitted[i][j], unik[k])
        if(katasplitted[i][j] === unik[k]){
          cek = false
          break;
        }
      }

      if (cek === true){
        unik.push(katasplitted[i][j])
      }
    }
    //console.log(unik) ==> cek unik 

    for (var a = 0 ; a < unik.length ; a++){
      var count = 0
      for (var b = 0 ; b < katasplitted[i].length ; b++){
        if (katasplitted[i][b] === unik[a]){
          count++
        }
        //console.log(count) cek count
      }
      freq.push(count)
    }
    //console.log(freq) ==> cek freq arraynya
    var hitungduplicate = 0
    for (var c = 0 ; c< freq.length ; c++){
      if (freq[c] > 1){
        hitungduplicate += 1
      }
    }
    if(max < hitungduplicate){
      max = hitungduplicate
      result = katasplitted[i]
    }
  }
  return result
}



// function hitungHuruf(kata) {
//   var arr = kata.split(' ');
//   var pembanding = 0;
//   var index;
//   for(var i = 0; i < arr.length; i++){
//     var ulang = 0;

//     for (j = 0; j < arr[i].length; j++){
      
//       for (k = arr[i].length -1; k >= 0; k--){

//         if (arr[i][j] === arr[i][k] && j !== k){
//           ulang++
//           } 
//         }
//     }

//     if (ulang > pembanding){
//       pembanding = ulang
//       index = i
//     }
//   } 
//   return arr[index]
// }

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau



//CARA TREA
// function hitungHuruf(kata) {

// 	var temp = [];
// 	var str = "";

//   // BUAT SPLIT
// 	for(var i = 0; i < kata.length; i++){
// 		if(kata[i] === " "){
// 			temp.push(str);
// 			str = ""
// 		} else {
// 			str += kata[i]
// 		}
// 	} 

// 	temp.push(str);

// 	var words = "";
// 	var max = 0;

// 	for(var j = 0; j < temp.length; j++){
// 		// console.log(temp[j])
// 		words = temp[j];
// 		var count = 0;
// 		for(var k = 0; k < temp[j].length; k++){
// 			//console.log(temp[j][k])
// 			//console.log(words[k])
// 			var kata = words[k];
// 			for (var a = 0; a < words.length; a++) {
// 				// console.log(a + " " + temp[j][k])
// 				if(a !== k && kata === words[a]){
// 					count++;
// 					// console.log(words)
// 				}
// 			}
// 		}
// 		if(count > max){
// 			max = count;
// 			temp = words;
// 		}
// 	}
// 	if(max > 0){
// 		return temp;
// 	} else {
// 		return -1
// 	}
// }



// SALAHH


// cara lain 
// function hitungHuruf(kata) {
//   // you can only write your code here!
//   let arr = kata.split(' ');
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i].lastIndexOf(arr[i][j]) !== arr[i].indexOf(arr[i][j])) {
//         return arr[i];
//       }
//     }
//   }
// }

// jika dalam kata terdapat huruf yang berulang ,tampilkan kata tersebut 
