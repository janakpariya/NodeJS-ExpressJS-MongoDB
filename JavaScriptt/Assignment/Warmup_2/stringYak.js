function stringYak(str) {
  let a = "";
  for (var i = 0; i < str.length; i++) {
    if (
      i + 2 < str.length &&
      str.charAt(i) == "y" &&
      str.charAt(i + 2) == "k"
    ) {
      i = i + 2;
    } else {
      a = a + str.charAt(i);
    }
  }
  return a;
}
