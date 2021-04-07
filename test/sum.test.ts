import {sum} from "@/index"

describe('sum', () => {

  it('should be ok', async () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  })

})
