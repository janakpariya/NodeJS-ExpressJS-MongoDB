function shareDigit(a, b){
    var a1 = a / 10;
    var a2 = a % 10;
    var b1 = b / 10;
    var b2 = b % 10;
          
    return a1 == b1 || a1 == b1 || a2 == b1 || a2 == b2;
}