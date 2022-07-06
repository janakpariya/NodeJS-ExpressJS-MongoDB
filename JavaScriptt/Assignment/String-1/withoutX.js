function withoutX(str) {
  if (str.length == 1) return "";
  else if (str.startsWith("x") && str.endsWith("x"))
    return str.substring(1, str.length - 1);
  else if (str.startsWith("x")) return str.substring(1, str.length);
  else if (str.endsWith("x")) return str.substring(0, str.length - 1);
  else return str;
}
