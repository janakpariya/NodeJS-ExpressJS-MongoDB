function countCode(str) {
  var a = 0;
  for (var i = 0; i < str.length - 2; i++) {
    if (str.substring(i, i + 2) == "co" && str.charAt(i + 3) == "e") a++;
  }

  return a;
}
