function love6(a, b){
  if (a == 6 || b == 6)
    return true;
  var diff = Math.abs(a-b);
  if (a+b == 6 || diff == 6)
    return true
  else
    return false;
}