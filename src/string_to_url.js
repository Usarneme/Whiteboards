// Using built-in function replaceAll()
const stringToUrlReplace = inputString => {
  return inputString.replaceAll(" ", "%20")
}

// Using split+join
const stringToUrlSplitJoin = inputString => {
  return inputString.split(" ").join("%20")
}

// Using a loop
const stringToUrlLoop = inputString => {
  let outputString = ""
  for (let index = 0; index < inputString.length; index += 1) {
    outputString += (inputString[index] === " ") ? "%20" : inputString[index]
  }
  return outputString
}

// Using recursion
const stringToUrlRecursive = (inputString, inputStringLength = 0, outputString = '') => {
  if (inputStringLength < inputString.length) {
    const currentCharacter = (inputString[inputStringLength] === " ") ? '%20' : inputString[inputStringLength]
    return stringToUrlRecursive(inputString, inputStringLength+1, outputString+currentCharacter)
  }
  return outputString
}

module.exports = {
  stringToUrlReplace,
  stringToUrlSplitJoin,
  stringToUrlLoop,
  stringToUrlRecursive
}