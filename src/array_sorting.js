// Selection Sort
// Repeatedly find the minimum element in the unsorted part of an array and put it at the beginning of sorted part of the array

const selectionSort = inputArray => {
  if (inputArray.length < 2) return inputArray
  let unsortedStartingIndex = 0
  while (unsortedStartingIndex < inputArray.length) {
    const smallestIndex = findSmallestElement(inputArray.slice(unsortedStartingIndex)) + unsortedStartingIndex
    const smallestElement = inputArray[smallestIndex]
    // remove the smallest element now that it has been copied
    inputArray.splice(smallestIndex, 1)
    // insert the next smallest element in place
    inputArray.splice(unsortedStartingIndex, 0, smallestElement)
    // update the starting index of the unsorted part of the array
    unsortedStartingIndex += 1
  }
  return inputArray
}

const findSmallestElement = inputArray => {
  let smallestIndex = 0
  inputArray.forEach((element, index) => {
    if (element < inputArray[smallestIndex]) smallestIndex = index
  })
  return smallestIndex
}

module.exports = { selectionSort }

// keep track of the unsorted starting index
// while loop to go thru each element from unsorted index to end of input array
// find smallest index (helper)
// add unsorted index to smallest index
// get smallest element at smallest index
// splice(smallestIndex, 1) to remove that element
// splice(unsorted index, 0, smallest element) to insert the smallest item, 0 in the middle to delete/remove no items
// increment the unsorted started index by 1
// end of while loop return the now sorted array