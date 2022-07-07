function repeatSeparator(word, sep, count) {
  var a = "";
  for (var i = 0; i < count; i++) {
    if (i < count - 1) a += word + sep;
    else a += word;
  }
  return a;
}
