function equalIsNot(str) {
  var not = 0;
  var is = 0;
  for (var i = 0; i < str.length; i++) {
    if (i < str.length - 2) {
      var tmp = str.substring(i, i + 3);
      if (tmp == "not") not++;
    }
    if (i < str.length - 1) {
      var tmp2 = str.substring(i, i + 2);
      if (tmp2 == "is") is++;
    }
  }
  if (not == is) return true;
  else return false;
}
