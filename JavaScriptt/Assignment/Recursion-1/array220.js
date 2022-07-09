function array220(nums, i){
  if(nums.length < i)
    {
        return false;
    }
    x = nums[i];
    if(nums[i]*10 == nums[i+1])
    {
        return true;
    }
    return array220(nums, i+1);
}