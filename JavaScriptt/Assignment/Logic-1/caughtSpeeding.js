function caughtSpeeding(speed, isBirthday){
  if (isBirthday==false) {
    if (speed <= 60)
      return 0;
    if (speed > 60 && speed <= 80)
      return 1;
    else
      return 2;
  } else if (speed <=65)
      return 0;
    else if (speed > 65 && speed <= 85)
      return 1;
    else
      return 2;
}