function sumDigits1(n){
  sum = 0;
    if(n < 10)
    {
        sum += n;
    }
    else
    {
        sum = (n%10)+sumDigits1(Math.floor(n/10));
    }
    return sum;
}