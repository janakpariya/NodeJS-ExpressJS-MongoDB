function make2(a, b){
  if (a.length == 0) {
    return [b[0],b[1]]
  } else if (a.length == 1 && b.length == 1) {
    return [a[0],b[0]]
  } else if (a.length == 1) {
      return [a[0],b[0]] 
  } else {
      return [a[0],a[1]]
  }
}