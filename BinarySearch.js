function getFirstElement(arr) {
  return arr[0];
}

getFirstElement([1,2,3])


function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right ) {
    let mid = Math.floor(( left + right ) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

binarySearch([11,23,34,56,67,78,89,98], 56)
