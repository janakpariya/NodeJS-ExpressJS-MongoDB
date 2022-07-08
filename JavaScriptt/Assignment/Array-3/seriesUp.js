function seriesUp(n){
  var arr = [n*(n+1)/2];
    
    var index = 0;
    if(n==0) return []
    for(var i = 1; i <= n; i++) {
        for(var j = 0; j < i; j++) {
            arr[index + j] = j + 1;
        }
        index += i;
    }
                                
    return arr;
}