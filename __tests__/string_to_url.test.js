const {
  stringToUrlReplace,
  stringToUrlSplitJoin,
  stringToUrlLoop,
  stringToUrlRecursive
} = require('../src/string_to_url')

describe("Testing the String To URL Prompt", () => {
  test("sanity check", () => {
    expect(true).toBeTruthy()
  })

  const inputString = "This is a test input"
  const outputString = "This%20is%20a%20test%20input"

  test("string to url using replace returns proper output", () => {
    expect(stringToUrlReplace(inputString)).toEqual(outputString)
  })

  test("string to url using split+join returns proper output", () => {
    expect(stringToUrlSplitJoin(inputString)).toEqual(outputString)
  })

  test("string to url using loop returns proper output", () => {
    expect(stringToUrlLoop(inputString)).toEqual(outputString)
  })

  test("string to url using recursion returns proper output", () => {
    expect(stringToUrlRecursive(inputString)).toEqual(outputString)
  })
})
