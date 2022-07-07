function dateFashion(you, date){
//   if(you>=8||date<=2&&you<=2||date>=8) return 0
  if(you>=8&&date>2||date>=8&&you>2)return 2
  else if(you<=2||date<=2) return 0
  else return 1
}