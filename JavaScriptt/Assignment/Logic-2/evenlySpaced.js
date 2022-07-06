function evenlySpaced(a, b, c) {
  if (a == b && a == c) return true;
  if (a == b || b == c || a == c) return false;
  var x = Math.abs(a - b);
  var y = Math.abs(a - c);
  var z = Math.abs(c - b);
  if (x == y) return true;
  else if (x == z) return true;
  else if (y == z) return true;
  else return false;
}
