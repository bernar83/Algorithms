// return decryption
function rot13(str) { // LBH QVQ VG!
  var string = str;
  var _string = [];
  
  for (var i = 0; i < string.length; i++) {
    // if character is non-alphabetic then keep same character's unicode
    if (string[i] == "!" || string[i] == "?" || string[i] == "." || string[i] == " ") {
      _string[i] = string.charCodeAt(i);
    }
    // change letter to decrypted letter's unicode
    else {
      _string[i] = ((string.charCodeAt(i) - 65 + 13) % 26) + 65;
    }
  }
  
  var cipher = "";
  
  // change unicode back to letter
  for (var j = 0; j < _string.length; j++) {
    cipher += String.fromCharCode(_string[j]);
  }
  
  return cipher;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!")
