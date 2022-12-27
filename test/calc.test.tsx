import {calc} from  '../src/calc'
import {calc2} from  '../src/calc'
import {Person} from  '../src/types'

test('合計値が正しい', () => {
    expect(calc(2, 3)).toBe(5)
})

test('合計値が正しい2', () => {


	const v: Person = {	firstName: "a", lastName: "b"}
    expect(calc2(v)).toBe(1)
})