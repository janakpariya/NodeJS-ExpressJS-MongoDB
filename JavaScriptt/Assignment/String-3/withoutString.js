function withoutString(base, remove) {
  base = base.toLowerCase();
  remove = remove.toLowerCase();
  var a = "";
  for (var i = 0; i < base.length; i++) {
    if (i <= base.length - remove.length) {
      var tmp = base.substring(i, i + remove.length);
      if (tmp != remove) a += base.substring(i, i + 1);
      else {
        i += remove.length - 1;
      }
    } else {
      var tmp2 = base.substring(i, i + 1);
      if (tmp2 != remove) a += base.substring(i, i + 1);
    }
  }
  return a;
}
