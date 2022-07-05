function altPairs(str) {
  let a = "";
  for (let i = 0; i < str.length; i += 4) {
    let end = i + 2;
    if (end > str.length) {
      end = str.length;
    }
    a = a + str.substring(i, end);
  }
  return result;
}
