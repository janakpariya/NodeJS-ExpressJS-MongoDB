function old35(n) {
  if (n % 3 == 0 || n % 5 == 0) {
    if (n % 3 == 0) {
      if (n % 5 == 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}
