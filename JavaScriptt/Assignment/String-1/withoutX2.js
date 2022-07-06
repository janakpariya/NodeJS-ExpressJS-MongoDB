function withoutX2(str) {
  if (str.length == 1) return "";
  else if (str.charAt(1) == "x" && str.charAt(0) == "x")
    return str.substring(2, str.length);
  else if (str.startsWith("x")) return str.substring(1, str.length);
  else if (str.charAt(1) == "x")
    return str.charAt(0) + str.substring(2, str.length);
  else return str;
}
