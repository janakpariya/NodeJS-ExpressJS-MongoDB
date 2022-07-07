function cigarParty(cigars, isWeekend) {
  if (cigars >= 40 && isWeekend == true) return true;
  if (cigars >= 40 && cigars <= 60) return true;
  else return false;
}
