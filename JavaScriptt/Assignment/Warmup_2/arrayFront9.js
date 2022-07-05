function arrayFront9(nums) {
  var count = 0;
  for (var i = 0; i < 4; i++) {
    if (nums[i] == 9) {
      count++;
    }
  }
  if (count > 0) {
    return true;
  } else {
    return false;
  }
}
