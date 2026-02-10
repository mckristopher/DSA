/*
You are given an array of integers.

Return true if any value appears more than once, otherwise return false.

You must solve this in one pass.

Example:
Input: [3, 5, 7, 3]
Output: true
*/

function findDuplicate(arr) {
    let dupes = false, visited = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        if (visited.has(arr[i])) {
            dupes = true;
            break;
        } else {
            visited.add(arr[i], i)
        }
    }
    
    // this is not ideal , becuase Set traverses through the aray
    // and set.size also requires a full traversal
    let original = new Set(arr);
    return original.size < arr.length;
}

console.log(findDuplicate([3, 5, 7, 3]))
