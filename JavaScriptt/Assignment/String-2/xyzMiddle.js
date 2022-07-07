function xyzMiddle(str) {
  if (str.length < 3) return false;

  var start1 = str.length / 2 - 2;
  var start2 = str.length / 2 - 1;

  if (str.length % 2 == 0) {
    return (
      str.substring(start1, start1 + 3) == "xyz" ||
      str.substring(start2, start2 + 3) == "xyz"
    );
  }

  return str.substring(start2, start2 + 3) == "xyz";
}
