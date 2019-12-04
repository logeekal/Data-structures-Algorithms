/**
 * 
 * Returns the copy of a sorted array in Ascending Order
 * 
 * @param {Array} nums The array that needs to be sorted
 * 
 * @returns {Array} Sorted Array
 */
export default function MergeSort(nums){
    /**
     * MergeSort takes an array and divides it into parts i.e. left and right.
     * Assumption if left and right are sorted, then complete array will be automatically sorted.
     * 
     * So we need to call MergeSort on left and right as well, recursively till left and right 
     * 1 element each. Now we can safely assume that 1 element is sorted and we can merge those 2
     * array with our helper function mergeArrays recursively.
     * 
     * 
     */
    // console.log(nums);
    let len =  nums.length;
    let left,right,mid;
    if(len > 1){
        let mid = Math.ceil(len/2);

        let left = MergeSort(nums.slice(0,mid));
        let right =  MergeSort(nums.slice(mid));

        return mergeArrays(left, right);
    }else{
        return nums.slice();
    }
}


/**
 * 
 * 
 * this function merges the Sorted arrays such that resultant array is also sorted.
 * 
 * @param {Array} array1 Ascending Sorted Array 1
 * @param {Array} array2 Ascending Sorted Array 2
 */
function mergeArrays(array1, array2){
    // console.log('Merging Arrays')
    // console.log([array1, array2])
    let result = [];
    let idx1 = 0;
    let idx2 = 0;
    while(idx1 < array1.length || idx2< array2.length){
        // console.log(`${idx1} --- ${idx2}`);
        if(idx1 < array1.length && idx2 < array2.length){
            if(array1[idx1] <= array2[idx2]){
                result.push(array1[idx1]);
                idx1++;
            }else{
                result.push(array2[idx2]);
                idx2++;
            }
        }else if(idx1 >= array1.length) {
            result.push(array2[idx2])
            idx2++;
        }else{
            result.push(array1[idx1])
            idx1++;
        }
        
    }
    // console.log(result);
    return result;
}


MergeSort([1,2,10,3,30,5,16])