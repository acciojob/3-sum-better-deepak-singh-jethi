function threeSum(arr, x) {
  arr.sort((a,b)=>a-b);
	let closestSum = 1000000000;
	for(let i = 0; i<arr.length-2;i++){
		let start = i+1;
		let end = arr.length-1;
		while(start<end){
			let sum = arr[i]+arr[start]+arr[end];
			if(Math.abs(1*x-sum)<Math.abs(1*x-closestSum)){
				closestSum = sum;
			}
			if(sum>x){
				end--;
			}
			else{
				start++;
			}
			
		}
	}
	return closestSum;
  
}

module.exports = threeSum;
