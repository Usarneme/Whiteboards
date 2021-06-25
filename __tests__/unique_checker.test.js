const {
  uniqueCheckerArraySet,
  uniqueCheckerLoop
} = require('../src/unique_checker')

describe("Testing the String To URL Prompt", () => {
  test("sanity check", () => {
    expect(true).toBeTruthy()
  })

  const inputString1 = "hello"
  const inputString2 = "copyright"

  test("uniqueCheckerArraySet should return true on a unique input", () => {
    expect(uniqueCheckerArraySet(inputString2)).toBeTruthy()
  })

  test("uniqueCheckerArraySet should return false on a non-unique input", () => {
    expect(uniqueCheckerArraySet(inputString1)).toBeFalsy()
  })

  test("uniqueCheckerLoop should return true on a unique input", () => {
    expect(uniqueCheckerLoop(inputString2)).toBeTruthy()
  })

  test("uniqueCheckerLoop should return false on a non-unique input", () => {
    expect(uniqueCheckerLoop(inputString1)).toBeFalsy()
  })
})
