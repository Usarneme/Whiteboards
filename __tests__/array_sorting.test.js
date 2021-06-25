const {
  selectionSort,
} = require('../src/array_sorting')

describe("Testing the String To URL Prompt", () => {
  test("sanity check", () => {
    expect(true).toBeTruthy()
  })

  test("selection sort should return a sorted array", () => {
    const inputArray = [9,5,3,2,6,78,2,12,1]
    const outputArray = [1,2,2,3,5,6,9,12,78]
    expect(selectionSort(inputArray)).toEqual(outputArray)
  })
})
