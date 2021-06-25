// Compress strings into a series of number+letter combinations, using a loop
const compressStringViaLoop = inputString => {
  if (inputString.length <= 1) return inputString
  let counter = 1;
  let previousCharacter = inputString[0]
  let outputString = ""
  for (let index = 1; index <= inputString.length; index += 1) {
    if (inputString[index] === previousCharacter) {
      counter += 1
    } else {
      if (counter > 1) {
        outputString += counter + previousCharacter
        counter = 1
      } else {
        outputString += previousCharacter
      }
      previousCharacter = inputString[index]
    }
  }
  return outputString
}

// Compress string using recursion and a loop
const compressStringViaRecursionAndLoop = inputString => {
  if (inputString.length <= 1) return inputString
  let counter = 1
  while (counter < inputString.length && inputString[0] === inputString[counter]) {
    counter += 1
  }
  countAndCharacter = counter > 1 ? "" + counter : ""
  return countAndCharacter + inputString.substring(0,1) + compressStringViaRecursionAndLoop(inputString.substring(counter))
}

// Compress string entirely with recursion (and helper function)
const compressStringViaRecursion = inputString => {
  return compressStringViaRecusionHelper(inputString, inputString[0], 0)
}

const compressStringViaRecusionHelper = (inputString, currentCharacter, counter) => {
  // base case
  if (inputString.length === 0) return (counter === 1 ? "" : "" + counter) + currentCharacter
  // recursive case
  nextString = inputString.substring(1, inputString.length)
  if (inputString[0] === currentCharacter) {
    return compressStringViaRecusionHelper(nextString, currentCharacter, counter + 1)
  } else {
    return (counter === 1 ? "" : "" + counter) + currentCharacter + compressStringViaRecusionHelper(nextString, inputString[0], 1)
  }
}

module.exports = {
  compressStringViaLoop,
  compressStringViaRecursionAndLoop,
  compressStringViaRecursion
}