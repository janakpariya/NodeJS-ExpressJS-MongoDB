function maxMirror(nums){
  var max = 0;
    for(var i = 0; i < nums.length; i++) {
        var count = 0;
        for(var j = nums.length - 1; j >= 0 && i + count < nums.length; j--) {
            if(nums[i + count] == nums[j]) {
                count++;
            } else {
                max = Math.max(max, count);
                count = 0;
            }
        }                                                           
        max = Math.max(max, count);
    }
    return max;
}