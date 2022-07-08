function makeLast(nums){
    var len=nums.length;
    var ans = [];
    for(var i=0; i<(len*2)-1; i++) {
        var z=[0];
        ans = ans.concat(z);
    }
    return ans.concat(nums[len-1])
}