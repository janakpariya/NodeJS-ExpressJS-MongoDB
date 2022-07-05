function endUp(str){
    a = str.length;
    if (a <= 3)
      return str.toUpperCase();
    else {
      b = str.substring(a - 3, a);
      return str.substring(0, a - 3) + b.toUpperCase();
    }
}
  