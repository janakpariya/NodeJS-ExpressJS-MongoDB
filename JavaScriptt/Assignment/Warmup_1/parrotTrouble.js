function parrotTrouble(talking, hour){
    return (talking && (hour < 7 || hour > 20));
}
  
parrotTrouble(true, 7);