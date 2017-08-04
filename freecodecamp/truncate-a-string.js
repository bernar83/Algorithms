// truncate string after chosen number
function truncateString(str, num) {
  if (str.length > num && num > 3) {
    var truncStr = str.slice(0, num - 3);
    return truncStr + '...';
  }
  else if (num <= 3) {
    var _truncStr = str.slice(0, num);
    return _truncStr + '...';
  }
  else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
