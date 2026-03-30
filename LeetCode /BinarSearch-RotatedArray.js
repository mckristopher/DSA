// You’re given a sorted array that has been rotated at some unknown pivot. Find the index of the target.

// Input: nums = [4,5,6,7,0,1,2], target = 0  
// Output: 4
// Input: nums = [4,5,6,7,0,1,2], target = 3  
// Output: -1

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Check if left half is sorted
    if (nums[left] <= nums[mid]) {
      // Target lies in left sorted half
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } 
    // Otherwise, right half must be sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
