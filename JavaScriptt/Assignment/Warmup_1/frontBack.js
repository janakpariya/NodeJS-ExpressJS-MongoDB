function frontBack(str){
    if(str.length<=1){
      return str;
    }else{
      return str.charAt(str.length-1)+str.substr(1,str.length-2)+str.charAt(0);
    }
}
  
frontBack(hello);