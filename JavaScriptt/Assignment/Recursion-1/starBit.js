function starBit(str){
  len = str.length;
	if(str[0] != '-')
	{
		if(str[len-1] != '*')
        {
			return starBit(str.substring(1, len -1));
        }
		return starBit(str.substring(1));
	}
	if(str[len-1] != '*')
    {
		return starBit(str.substring(0, len - 1));
    }
	return str;
}