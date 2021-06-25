const {
  compressStringViaLoop,
  compressStringViaRecursionAndLoop,
  compressStringViaRecursion
} = require('../src/string_compress')

describe("Testing the String To URL Prompt", () => {
  test("sanity check", () => {
    expect(true).toBeTruthy()
  })

  const inputString = "aaabccdddda"
  const outputString = "3ab2c4da"

  test("compressStringViaLoop returns the correct result", () => {
    expect(compressStringViaLoop(inputString)).toEqual(outputString)
  })

  test("compressStringViaRecursionAndLoop returns the correct result", () => {
    expect(compressStringViaRecursionAndLoop(inputString)).toEqual(outputString)
  })

  test("compressStringViaRecursion returns the correct result", () => {
    expect(compressStringViaRecursion(inputString)).toEqual(outputString)
  })
})
