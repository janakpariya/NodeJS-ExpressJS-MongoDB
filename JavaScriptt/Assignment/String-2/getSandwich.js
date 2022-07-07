function getSandwich(str) {
  var temp = "";
  var s = 0;
  var e = 0;
  var a = false;
  if (str.length <= 10) return "";

  for (var i = 0; i < str.length - 4; i++) {
    temp = str.substring(i, i + 5);
    if (temp == "bread" && a == false) {
      s = i + 5;
      a = true;
    }
    if (temp == "bread" && a == true) e = i;
  }
  return str.substring(s, e);
}
