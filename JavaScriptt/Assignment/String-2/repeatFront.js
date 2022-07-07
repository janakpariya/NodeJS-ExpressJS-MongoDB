function repeatFront(str, n) {
  var sum = "";
  for (var i = n; i >= 0; i--) {
    sum = sum + str.substring(0, i);
  }
  return sum;
}
