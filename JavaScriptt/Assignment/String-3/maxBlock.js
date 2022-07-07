function maxBlock(str){
  var count = 0;
  var tmpcount = 1;
  if (str.length == 0)
    return 0; 
  for (var i = 0; i < str.length; i++) {
    if (i < str.length-1 && str.charAt(i) == str.charAt(i+1))
      tmpcount++;
    else
      tmpcount = 1;
    if (tmpcount > count)
      count = tmpcount;
  }
  return count;
}