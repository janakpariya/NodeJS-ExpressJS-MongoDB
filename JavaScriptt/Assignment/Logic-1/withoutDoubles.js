function withoutDoubles(die1, die2, noDoubles){
  	  if(noDoubles==true) {
    if (die1 == die2) {
      if (die1 != 6)
        return die1 + 1 + die2;
      else
        return 1 + die2;
    }
  }
  return die1 + die2;
}