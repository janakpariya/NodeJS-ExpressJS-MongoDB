function squirrelPlay(temp, isSummer) {
  if (isSummer == true && temp <= 100 && temp >= 60) return true;
  if (isSummer == false && temp <= 90 && temp >= 60) return true;
  else return false;
}
