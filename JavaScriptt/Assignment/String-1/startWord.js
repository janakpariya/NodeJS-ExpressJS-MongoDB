function startWord(str, word) {
  if (str.length == 0) return "";
  else if (word.length > str.length) return "";
  else if (word.length == 1) return str.substring(0, 1);
  else if (str.substring(1, word.length) == word.substring(1, word.length))
    return str.substring(0, word.length);
  else return "";
}
