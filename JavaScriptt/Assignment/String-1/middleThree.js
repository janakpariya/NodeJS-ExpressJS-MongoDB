function middleThree(str) {
  var a = str.length / 2;
  return str.substring(a - 1, a + 2);
  //   return str.charAt(a-1)+str.charAt(a)+str.charAt(a+1)
}
