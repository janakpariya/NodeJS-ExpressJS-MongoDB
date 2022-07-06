function conCat(a, b) {
  if (a.length == 0 || b.length == 0) return a + b;
  if (a.substring(a.length - 1, a.length) == b.substring(0, 1))
    return a + b.substring(1, b.length);
  else return a + b;
}
