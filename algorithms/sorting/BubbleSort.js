/**
 * this function will sort an array of oderable items in ascending order
 * 
 * @param {Array} nums Array that needs to be sorted via bubble sort.
 * 
 * @returns {Array} Array sorted in ascending order
 */
export default function BubbleSort(nums){
    /**
     * The idea in the algorithm is to bubble up/down the lowest/heighest element.
     * Let's assume we are doing ascending sorting.
     * 
     * We will start from the end & we will compare and i & and i-1 elements 
     * and if nums[i] < nums[i-1], we will swap them, so that element at i
     * bubbles up to the position of i-1.
     * 
     * In one traversal, we will have sorted one element.
     *  
     */
     let len = nums.length;
     //console.log(nums);
     for(let iter=0; iter< len; iter++)
     {
        for(let idx=len; idx>iter; idx-- ){
            /**
             * In one complete iteration this will bubble one item to the top of the list.
             * We need total of n-1 iterations like this.
             */
            if(nums[idx] < nums[idx-1]){
                //swap them
                let lowest = nums[idx];
                nums[idx] = nums[idx-1];
                nums[idx-1] = lowest;
            }
         }
     }

     return nums;
     
}