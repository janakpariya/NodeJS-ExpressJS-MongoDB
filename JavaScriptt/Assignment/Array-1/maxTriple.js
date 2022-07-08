function maxTriple(nums){
  var a = nums[0];
  var b= nums[((nums.length+1)/2) -1;
  var c= nums[nums.length -1];
  
  var max = Math.max(a,b)
  max=Math.max(max,c)
  
  return max

}