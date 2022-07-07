function countTriple(str) {
  var count = 0;
  for (var i = 0; i < str.length - 2; i++) {
    var tmp = str.charAt(i);
    if (tmp == str.charAt(i + 1) && tmp == str.charAt(i + 2)) count++;
  }
  return count;
}
