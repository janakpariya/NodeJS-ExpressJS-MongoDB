function minCat(a, b) {
  if (a.length == b.length) return a + b;
  else if (a.length > b.length) {
    var diff = a.length - b.length;
    return a.substring(diff, a.length) + b;
  } else {
    diff = b.length - a.length;
    return a + b.substring(diff, b.length);
  }
}
