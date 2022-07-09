function endX(str){
  if(str.length < 1)
    {
		return str;
    }
    if(str[0] == 'x')
    {
        return endX(str.substring(1))+'x';
    }
    return str[0]+endX(str.substring(1));
}