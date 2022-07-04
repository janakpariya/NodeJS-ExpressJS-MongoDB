function monkeyTrouble(aSmile, bSmile){
    if(aSmile==true && bSmile==true){
      return true;
    } else if(aSmile==false && bSmile==false){
      return true;
    } else {
      return false;
    }
}
monkeyTrouble(true, false);