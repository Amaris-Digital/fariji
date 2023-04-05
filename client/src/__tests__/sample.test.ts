// sample test suite
const sum = (a: number, b: number):number => a + b;
const minus = (a: number, b:number): number => a - b;
const divide = (a: number, b: number): number => a / b;

describe('calculator', () => {

    it("should add two numbers correctly", () => {
        expect(sum(10,20)).toBe(30)
    });

    it("should subtract two numbers correctly", () => {
        expect(minus(33,20)).toBe(13)
    });

    it("should divide two numbers correctly", () => {
        expect(divide(69,23)).toBe(3)
    });

})
