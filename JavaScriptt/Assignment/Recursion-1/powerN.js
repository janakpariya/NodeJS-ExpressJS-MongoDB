function powerN(base, n){
  if(n == 1 || n == 0)
    {
        return base;
    }
    else
    {
        return (base)*(powerN(base,n-1));
    }
}