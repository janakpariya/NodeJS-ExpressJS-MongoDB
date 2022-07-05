function icyHot(temp1, temp2){
    if(temp1<0&&temp2>100||temp2<0&&temp1>100){
      return true;
    } else {
      return false;
    }
}
  
icyHot(243, -23);