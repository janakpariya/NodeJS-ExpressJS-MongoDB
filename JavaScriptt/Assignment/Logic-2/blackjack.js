function blackjack(a, b) {
  if (a > 21 && b > 21) return 0;
  else if (a > 21) return b;
  else if (b > 21) return a;
  else if (21 - a > 21 - b) return b;
  else return a;
}
