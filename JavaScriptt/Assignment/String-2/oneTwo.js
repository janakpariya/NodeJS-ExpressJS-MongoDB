function oneTwo(str) {
  var a = "";
  for (var i = 0; i < str.length - 2; i += 3) {
    a = a + str.substring(i + 1, i + 3) + str.charAt(i);
  }
  return a;
}
