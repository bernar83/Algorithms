function rot13(str) { // LBH QVQ VG!
  var string = str;
  var _string = [];
  
  for (var i = 0; i < string.length; i++) {
    if (string[i] == "!" || string[i] == "?" || string[i] == ".") {
      var keep = string[i];
      _string[i] = keep;
    }
    else {
      _string[i] = string.charCodeAt(i) + 13;
    }
  }
  
  return _string;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
