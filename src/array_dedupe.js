// Return unique values from an array in a new array using Sets
const uniqueElementsViaSet = inputArray => Array.from(new Set(inputArray))
const uniqueElementsViaSetSpread = inputArray => [...new Set(inputArray)]

// Return unique values in new array using filter
const uniqueElementsViaFilter = inputArray => inputArray.filter((element, index) => inputArray.indexOf(element) === index)

// Return unique values in new array using a hash table/object
const uniqueElementsViaHashTable = inputArray => {
  const hashTable = {}
  const outputArray = []
  inputArray.forEach(element => {
    if (!hashTable[element]) {
      hashTable[element] = true
      outputArray.push(element)
    }
  })
  return outputArray
}

module.exports = {
  uniqueElementsViaSet,
  uniqueElementsViaSetSpread,
  uniqueElementsViaFilter,
  uniqueElementsViaHashTable
}