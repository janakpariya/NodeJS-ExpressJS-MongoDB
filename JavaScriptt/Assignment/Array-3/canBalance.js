function canBalance(nums){
  var a = 0;
  for (var i = 0; i < nums.length; i++) {
    a += nums[i];
    var b = 0;
    for (var j = nums.length-1; j > i; j--) {
      b += nums[j];
    }
    if (b == a)
      return true;
  }
  return false;
}