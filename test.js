function test(nums){
    let p1 = 0,
        p2 = 1,
        ans = nums[p1],
        largest = -infinity;
    while(p1<nums.length-1){
        ans = ans+p2;
        if(ans>largest) largest = ans;
        p2++;
        if(p2>=nums.length){
            p1++;
            p2 = p1+1;
            ans = nums[p1];
        }
    }
    return largest;
}

test([-2,1,-3,4,-1,2,1,-5,4]);