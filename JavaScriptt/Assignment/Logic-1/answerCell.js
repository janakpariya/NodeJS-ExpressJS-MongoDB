function answerCell(isMorning, isMom, isAsleep){
    if (isAsleep==true)
    return false;
  if ((isMorning==true && isMom==true) || isMorning==false)
    return true;
  else return false
}