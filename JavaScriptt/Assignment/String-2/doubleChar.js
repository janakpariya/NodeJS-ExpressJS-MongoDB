function doubleChar(str) {
  var a = "";
  for (var i = 0; i < str.length; i++) {
    a = a + str[i];
    a = a + str[i];
  }
  return a;
}
