function prefixAgain(str, n) {
  var prefix = str.substring(0, n);
  for (var i = n; i < str.length; i++) {
    if (n + i <= str.length) {
      if (prefix == str.substring(i, n + i)) return true;
    }
  }
  return false;
}
