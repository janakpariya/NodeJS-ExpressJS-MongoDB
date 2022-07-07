function xyBalance(str) {
  var x = false;
  var y = false;
  var len = str.length;
  for (var i = 0; i < len; i++) {
    if (str.charAt(i) == "x" && y == true) {
      x = true;
      y = false;
    } else if (str.charAt(i) == "x") {
      x = true;
    }
    if (str.charAt(i) == "y" && x == true) y = true;
  }
  if (x == false) y = true;
  return y;
}
