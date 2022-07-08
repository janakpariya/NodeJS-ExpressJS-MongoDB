function countClumps(nums){
  var a = false;
  var count = 0;
  for (var i = 0; i < nums.length-1; i++) {
    if (nums[i] == nums[i+1] && !a) {
      a = true;
      count++;
    }
    else if (nums[i] != nums[i+1]) {
      a = false;
    }
  }
  return count;
}