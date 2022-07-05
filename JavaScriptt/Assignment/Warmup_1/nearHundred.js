function nearHundred(n){
    a = Math.abs(n - 100);
    b = Math.abs(n - 200);
    if(a<=10||b<=10){
      return true;
    }else{
      return false;
    }
}
  
nearHundred(10);