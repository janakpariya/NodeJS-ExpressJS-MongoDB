function wordEnds(str, word) {
  var a = "";
  for (var i = 0; i < str.length - word.length + 1; i++) {
    var tmp = str.substring(i, i + word.length);
    if (i > 0 && tmp == word) a += str.substring(i - 1, i);
    if (i < str.length - word.length && tmp == word)
      a += str.substring(i + word.length, i + word.length + 1);
  }
  return a;
}
