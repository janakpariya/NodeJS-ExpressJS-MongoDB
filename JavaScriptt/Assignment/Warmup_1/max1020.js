function max1020(a, b) {
  let f = 0;
  let s = 0;

  if (a >= 10 && a <= 20) {
    f = a;
  } else {
    f = 0;
  }

  if (b >= 10 && b <= 20) {
    s = b;
  } else {
    s = 0;
  }
  if (f > s) return f;
  else return s;
}
max1020(10, 25);