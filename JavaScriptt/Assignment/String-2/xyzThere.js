function xyzThere(str) {
  if (str.length >= 3 && str.substring(0, 3) == "xyz") return true;
  for (var i = 1; i < str.length - 2; i++) {
    if (str.substring(i, i + 3) == "xyz" && str.charAt(i - 1) != ".")
      return true;
  }
  return false;
}
