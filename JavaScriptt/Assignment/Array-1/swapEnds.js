function swapEnds(nums){
  var a=nums[0]
  nums[0]=nums[nums.length-1]
  nums[nums.length-1]=a
  return nums
}