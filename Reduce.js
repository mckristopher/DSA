/* Problem 1: return the sum of only the even numbers in a given array */

function findSum(arr) {
  return arr.reduce((acc, curr) => !(curr % 2) ? acc + curr : acc, 0 )
}

console.log('1.', findSum([1, 2, 3, 4, 5, 6]))


/* Problem 2: return an object with the count of each string in a given array */

function findCount(arr) {
  return arr.reduce((acc, curr) => {
    const curCount = acc[curr] ?? 0;
    acc[curr] = curCount + 1;
    return acc
    }, {})
}

console.log('2.', findCount(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']))

/* Problem 3: flatten a given array by one level */

function flatten(arr, result = []) {
  return arr.reduce((flat, e) => {
    if (Array.isArray(e)) {
      flatten(e, result)
    } else {
      flat.push(e)
    }
    
    return flat
  }, result)
}

console.log('3.', flatten([1, [2, 3], 4, [5, 6, [7, 8, [9, 10]]]]))


/* Problem 4: Group users in an object array by role */
function groupByRole(arr) {
  return arr.reduce((groups, person) => {
    if (!groups[person.role]) {
      groups[person.role] = []
    }
    groups[person.role].push(person)
    
    return groups
  }, [])
}

const users = [
  { name: 'A', role: 'admin' },
  { name: 'B', role: 'user' },
  { name: 'C', role: 'admin' },
];
console.log('4.', groupByRole(users))



/* Problem 5: Group transactions in an object array by category with total expenses */
function groupAmounts(transactions) {
  return transactions.reduce((categories, category) => {
    if (!categories[category.category]) {
      categories[category.category] = 0;
    }
    categories[category.category] = categories[category.category] + category.amount;
    return categories
  }, {})
}


const transactions = [
  { category: 'food', amount: 50 },
  { category: 'travel', amount: 100 },
  { category: 'food', amount: 30 },
];
console.log('5.', groupAmounts(transactions));




