function catDog(str) {
  var cat = 0;
  var dog = 0;
  for (var i = 0; i < str.length - 2; i++) {
    if (str.substring(i, i + 3) == "cat") cat++;
    if (str.substring(i, i + 3) == "dog") dog++;
  }

  if (cat == dog) return true;
  else return false;
}
