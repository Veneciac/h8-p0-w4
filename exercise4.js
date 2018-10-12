function cariModus(arr) {
  var nampung = {}
  for (var i = 0 ; i < arr.length ; i++){
    nampung[arr[i]] = 1 // MASUKIN OBJECT PAKE [] BUKAN . & harus ada nilai = brp
    for (var j = 0 ; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j){
        nampung[arr[i]] +=1
      }
    }   
  }
  var keys = Object.keys(nampung)
  var values = Object.values(nampung)
  //console.log(keys, values) ==> cek keys sama valuesnya
  var max = values[0]
  var result = keys[0]
  for (var a = 0 ; a < values.length ; a++){
    if(max < values[a]){
      max = values[a]
      result = keys[a]
    }
  }

  if(keys.length === 1){
    return -1
  } else if (max === 1){
    return -1
  }
  // for (var k =0 ; k < nampung.length ;k++){
  //   if (Object.values(nampung[k]) < Object.values(nampung[k+1])){
  //     result += nampung[k +1]
  //   }else {
  //     result += nampung[k]
  //   }
  // }
  return result
  //return nampung //<== buat cek apakah sudah masuk ke obj 
}

// function cariModus(arr) {
//   var frekuensiTerbanyak= 0;
//   var Modus = 0;
//   var freq = 0;
//   for(var i = 0 ; i < arr.length ; i++){
//     // console.log(arr[i])
//     for(var j = 0 ; j < arr.length ; j++){
//       // console.log(arr[i]+" " +arr[j])
//       if (arr[i] === arr[j] && i !== j){
//       freq ++ 
//       }else if(freq > frekuensiTerbanyak){
//         frekuensiTerbanyak = freq
//         Modus=i
//         // console.log(Modus)

//       }
//     }
//   }
//   if(Modus === 0){
//     return -1;
//   }
//   var angkaberulangsama = 0;
//   for( var k = 0 ; k < arr.length ; k++){
//     angkaberulangsama += arr[k]
//     if(angkaberulangsama/arr.length === arr[k]){
//       return -1
//     }
//   }
//   return arr[Modus]
// }

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

//CARA LAIN
// function cariModus(arr){
//  var unik = []
//  var str = []
//  for(i = 0; i < arr.length; i++){
//    var indexOnUnik = unik.indexOf(arr[i])
//    // console.log(indexOnUnik)
//    if(indexOnUnik === -1){
//      unik.push(arr[i])
//      str.push(1)
//    }else if (indexOnUnik !== -1){
//      str[indexOnUnik] =  str[indexOnUnik] + 1
//    }
//  }

//  var hasil = 0
//  for(j = 0; j < str.length; j++){
//    if(str[j] > 1 && unik.length > 1){
//      hasil = unik[j]
//      break;
//    }
//  }
//    if (hasil === 0){
//      return -1
//    }else{
//      return hasil
//    }
//  }

//BELOM BISA


//SALAH
// function cariModus(arr) {
//   var modus = -1 ;
//   var urut = arr.sort(function(a,b) {return (a-b)})
//   console.log("=> ",urut)
//   for (var i = 0 ; i < urut.length ; i ++){
//     var isBreak = false;
//     if (urut[i] === urut[urut.length-1]) {
//       return -1
//     }

//     for (var j = 0 ; j < urut.length ; j++ ){
//       if (urut[i] === urut[j] && i!== j){
//         //console.log("=>",urut[i])
//         modus = urut[i];
//         isBreak = true;
//         break;
//       }
//     }
//     if (isBreak) {
//       break;
//     }
//     // break;
//   }
//   return modus
// }



