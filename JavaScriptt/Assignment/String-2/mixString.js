function mixString(a, b) {
  var c = "";
  var max = Math.max(a.length, b.length);
  for (var i = 0; i < max; i++) {
    if (i <= a.length - 1) c += a.substring(i, i + 1);
    if (i <= b.length - 1) c += b.substring(i, i + 1);
  }
  return c;
}
