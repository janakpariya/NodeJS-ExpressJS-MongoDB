function mirrorEnds(string) {
  var fin = "";
  var tmp1 = "";
  var tmp2 = "";
  for (var i = 0; i < string.length; i++) {
    tmp1 += string.substring(i, i + 1);
    tmp2 = "";
    for (var j = tmp1.length - 1; j >= 0; j--) {
      tmp2 += tmp1.substring(j, j + 1);
      if (tmp2 == string.substring(string.length - i - 1, string.length))
        fin = tmp1;
    }
  }
  return fin;
}
