import {add, subtract} from '../utils'

describe("add()", () => {
  test("Expect 1 + 1 to be equal 2", () => {
    expect(add(1, 1)).toEqual(2)
  })
})

describe("subtract()", () => {
  test("Expect 1 - 1 to be equal 0", () => {
    expect(subtract(1, 1)).toEqual(0)
  })
})