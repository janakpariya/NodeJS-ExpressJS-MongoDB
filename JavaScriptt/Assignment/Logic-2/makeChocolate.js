function makeChocolate(small, big, goal) {
  if (small + big * 5 < goal) return -1;
  else if (big * 5 > goal) return goal % 5;
  else return goal - big * 5;
}
