function linearIn(outer, inner){
  var a = 0;
  if(inner.length == 0) {
     return true;
  }
  var b = 0;
  for(var i = 0; i < outer.length; i++) {
     if(outer[i] == inner[b]) {
        a++;
        b++;
     } else if(outer[i] > inner[b]) {
        return false
     }
     if(a == inner.length)
        return true;
  }
  return false
}