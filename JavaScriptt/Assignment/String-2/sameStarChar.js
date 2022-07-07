function sameStarChar(str) {
  var a = true;
  for (var i = 1; i < str.length; i++) {
    if (str.substring(i, i + 1) == "*" && i > 0 && i < str.length - 1) {
      if (str.charAt(i - 1) == str.charAt(i + 1)) a = true;
      else a = false;
    }
  }
  return a;
}
