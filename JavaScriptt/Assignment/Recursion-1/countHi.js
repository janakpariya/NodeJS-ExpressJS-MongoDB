function countHi(str){
  var count=0
  for(var i=0;i<str.length;i++){
    if(str.substring(i,i+2)=="hi")
    {
      count++;
    }
  }
  return count;
}