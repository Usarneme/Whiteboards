const uniqueCheckerArraySet = inputString => {
  return (inputString.length === new Set(inputString.split("")).size)
}

const uniqueCheckerLoop = inputString => {
  const hashset = {}
  for (let index = 0; index < inputString.length; index += 1) {
    if (hashset[inputString[index]]) return false
    hashset[inputString[index]] = true
  }
  return true
}

module.exports = {
  uniqueCheckerArraySet,
  uniqueCheckerLoop
}