// Logic Challenge - Password Generator
// Problem
// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

// Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

// Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

// Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

// Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:
// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

function changeVocals (str) {
  var stri ='';
  for (var i = 0; i < str.length ; i++){
    if(str[i]=== 'a'){
      stri += 'b'
    }else if (str[i] === 'i'){
      stri += 'j'
    }else if(str[i] === 'u'){
      stri += 'v'
    }else if (str[i] === 'e'){
      stri += 'f'
    }else if (str[i]=== 'o'){
      stri += 'p'
    }else if(str[i] === 'A'){
      stri += 'B'
    }else if (str[i] === 'I'){
      stri += 'J'
    }else if (str[i] === 'U'){
      stri += 'V'
    }else if (str[i]=== 'E'){
      stri += 'F'
    }else if (str[i] === 'O'){
      stri += 'P'
    }else {
      stri += str[i]
    }
  }
  return stri
}

function reverseWord (str) {
  //var stri = changeVocals(str)
  var baru = ''
  for(var i = str.length-1 ; i >= 0 ; i--){
    baru += str[i]
  }
  return baru
}

function setLowerUpperCase (str) {
 // var stri = reverseWord(str)
  var baru = '';
  for (var i = 0 ; i < str.length ; i++){
    if(str[i] == str[i].toUpperCase()){
      baru += str[i].toLowerCase()
    }else if(str[i] == str[i].toLowerCase()){
      baru += str[i].toUpperCase()
    }
  }
  return baru
}

function removeSpaces (str) {
 // var stri = setLowerUpperCase(str)
  var baru = '';
  for (var i =0 ; i < str.length; i++){
    if(str[i] !== ' '){
      baru += str[i]
    }
  }
  return baru
}


function passwordGenerator (name) {
  if (name.length <= 4 ){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var step1 = changeVocals(name)
  var step2 = reverseWord(step1)
  var step3 = setLowerUpperCase(step2)
  var step4 = removeSpaces(step3)
  return step4
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'