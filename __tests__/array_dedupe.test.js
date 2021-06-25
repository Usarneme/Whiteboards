const {
  uniqueElementsViaSet,
  uniqueElementsViaSetSpread,
  uniqueElementsViaFilter,
  uniqueElementsViaHashTable
} = require('../src/array_dedupe')

describe("Testing the String To URL Prompt", () => {
  test("sanity check", () => {
    expect(true).toBeTruthy()
  })

  const inputArray = [1,1,2,3,3,4,5]
  const outputArray = [1,2,3,4,5]

  test("uniqueElementsViaSet returns the correct output", () => {
    expect(uniqueElementsViaSet(inputArray)).toEqual(outputArray)
  })

  test("uniqueElementsViaSetSpread returns the correct output", () => {
    expect(uniqueElementsViaSetSpread(inputArray)).toEqual(outputArray)
  })

  test("uniqueElementsViaFilter returns the correct output", () => {
    expect(uniqueElementsViaFilter(inputArray)).toEqual(outputArray)
  })

  test("uniqueElementsViaHashTable returns the correct output", () => {
    expect(uniqueElementsViaHashTable(inputArray)).toEqual(outputArray)
  })
})
