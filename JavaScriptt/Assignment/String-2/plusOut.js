function plusOut(str, word) {
  var a = "";
  for (var i = 0; i < str.length; i++) {
    if (i <= str.length - word.length) {
      var tmp = str.substring(i, i + word.length);
      if (tmp == word) {
        a += word;
        i += word.length - 1;
      } else a += "+";
    } else a += "+";
  }
  return a;
}
