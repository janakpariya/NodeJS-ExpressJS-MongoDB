function maxSpan(nums) {
  var max = 0;

  for (var i = 0; i < nums.length; i++) {
    var j = nums.length - 1;

    while (nums[i] != nums[j]) j--;

    var span = j - i + 1;

    if (span > max) max = span;
  }

  return max;
}
