function lessBy10(a, b, c) {
  var high = Math.max(a, b);
  high = Math.max(high, c);
  if (high - a >= 10 || high - b >= 10 || high - c >= 10) return true;
  else return false;
}
