import { describe, expect, it } from 'vitest'
import { createTargetArray } from '../../../../../../solutions/1389.js'

describe('correct_values', () => {
  it('valid_output_1', () => {
    const nums = [1, 2, 3]
    const index = [0, 1, 1]
    const expected = [1, 3, 2]
    const result = createTargetArray(nums, index)
    expect(result).toEqual(expected)
  })
  it('valid_output_2', () => {
    const nums = [0, 1, 2, 3, 4]
    const index = [0, 1, 2, 2, 1]
    const expected = [0, 4, 1, 3, 2]
    const result = createTargetArray(nums, index)
    expect(result).toEqual(expected)
  })
  it('valid_output_3', () => {
    const nums = [1]
    const index = [0]
    const expected = [1]
    const result = createTargetArray(nums, index)
    expect(result).toEqual(expected)
  })
})
