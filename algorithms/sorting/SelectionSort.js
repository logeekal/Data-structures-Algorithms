/**
 * This function implements SelectionSort in javascript
 * 
 * @param {Array} nums  Array of numbers to be sorted.
 * 
 * @returns {Array} Sorted Array
 */

export default function SelectionSort(nums){
    /**
     * Main logic of this algorithm is :
     * 
     * 1. Find the lowest/highest element 
     * 2. Insert it at starting/ending position so that 1 element is sorted.
     * 3. Now that needs to be repeated for all the element in the array as you iterate.
     */

     for(let idx=0; idx<nums.length-1; idx++){
         /**
          * Now for each idx value we will search for the lowest value in the array
          * and swap that with idx.
          */
         let lowest = nums[idx];
         let lowestIdx = idx;
         for(let sub_idx=idx+1; sub_idx<nums.length; sub_idx++){
            if(lowest > nums[sub_idx]){
                lowest = nums[sub_idx];
                lowestIdx = sub_idx;
            }
         }
         /**
          * now once we have found the lowest element, we will swap it with 
          * current idx value;
          */
         let temp = nums[idx];
         nums[idx] = lowest;
         nums[lowestIdx] = temp;
     }
     return nums;
}