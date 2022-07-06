function closeFar(a, b, c) {
  var x = Math.abs(b - c);
  var y = Math.abs(a - b);
  var z = Math.abs(a - c);
  if (y <= 1 && z >= 2 && x >= 2) return true;
  else if (z <= 1 && x >= 2 && y >= 2) return true;
  else return false;
}
