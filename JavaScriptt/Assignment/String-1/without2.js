function without2(str) {
  var len = str.length;
  if (len == 2) return "";
  if (len < 2) return str;
  else {
    if (str.substring(0, 2) == str.substring(len - 2, len))
      return str.substring(2, len);
    else return str;
  }
}
