function doubleX(str) {
  var i = str.indexOf("x");
  var x = str.substring(i);
  return x.startsWith("xx");
}
