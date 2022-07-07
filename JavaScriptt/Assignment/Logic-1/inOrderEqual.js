function inOrderEqual(a, b, c, equalOk) {
  if (equalOk == false && a < b && b < c) return true;
  if (equalOk == true && a <= b && b <= c) return true;
  else return false;
}
