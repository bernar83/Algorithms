function confirmEnding(str, target) {
  // find length of target string 
  var targetLength = target.length;
  
  // find the ending of the string
  var stringEnding = str.substring(str.length - targetLength);
  
  // if target string and ending of string match return true, else false
  if (stringEnding == target) {
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("Bastian", "n");
