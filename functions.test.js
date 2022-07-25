const {
    returnTwo,
    greeting, 
    add 
    } = require('./functions')

test("should run", () => {
    expect(returnTwo()).toBe(2);
}),
describe("greeting tests", () => {
    test("greeting should equal hello james", () => {
        expect(greeting('James')).toEqual('Hello, James.')
    });
    test("greeting should equal hello Jill", () => {
        expect(greeting('Jill')).toEqual('Hello, Jill.')
    })
});

describe("add tests", () => {
    test('add should equal 3', () => {
        const result = add(1,2);
      expect(result).toEqual(3);
    });
    test('add should equal 14', () => {
        const result = add(5,9);
        expect(result).toEqual(14);
    });

})
