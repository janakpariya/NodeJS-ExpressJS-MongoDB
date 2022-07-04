function close10(a, b){
    diffa = Math.abs(a - 10);
    diffb = Math.abs(b - 10);
    if (diffa < diffb) {
      return a;
    }
    if (diffb < diffa) {
      return b;
    }
    return 0;
}
  
close10(12, 12);