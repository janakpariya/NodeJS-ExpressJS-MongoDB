function starOut(str) {
  var a = "";
  for (var i = 0; i < str.length; i++) {
    if (i == 0 && str.charAt(i) != "*") a += str.charAt(i);
    if (i > 0 && str.charAt(i) != "*" && str.charAt(i - 1) != "*")
      a += str.charAt(i);
    if (i > 0 && str.charAt(i) == "*" && str.charAt(i - 1) != "*")
      a = a.substring(0, a.length - 1);
  }
  return a;
}
