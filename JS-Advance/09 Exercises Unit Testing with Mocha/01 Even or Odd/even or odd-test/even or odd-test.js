let isOddOrEven = require("../even or odd").isOddOrEven;
let expect = require('chai').expect;

describe("Test isOddOrEven()", function () {
     it("should return underfined for recive array([2,3,4])", function () {
         let expectResult  = undefined;
         let inputData = isOddOrEven([2,3,4]);
         expect(inputData).to.be.equal(expectResult);
     });

    it("should return underfined for recive object({name:'plufi', age:30})", function () {
        let expectResult  = undefined;
        let inputData = isOddOrEven({name:'plufi', age:30});
        expect(inputData).to.be.equal(expectResult);
    });

    it("should return odd for ('hui')", function () {
        let expectResult  = "odd";
        let inputData = isOddOrEven("hui");
        expect(inputData).to.be.equal(expectResult);
    });

    it("should return underfined for empty object({})", function () {
        let expectResult  = undefined;
        let inputData = isOddOrEven({});
        expect(inputData).to.be.equal(expectResult);
    });

    it("should return underfined for recive empty array([])", function () {
        let expectResult  = undefined;
        let inputData = isOddOrEven([]);
        expect(inputData).to.be.equal(expectResult);
    });

    it("should return odd for ('   kef    ')", function () {
        let expectResult  = "even";
        let inputData = isOddOrEven("   kef    ");
        expect(inputData).to.be.equal(expectResult);
    });

    it("should return odd for (' a-  %^ <>,{{{{===       %#@%$ 4iki r i k i ??')", function () {
        let expectResult  = "even";
        let inputData = isOddOrEven(" a-  %^ <>,{{{{===       %#@%$ 4iki r i k i ");
        expect(inputData).to.be.equal(expectResult);
    });

    it("should return odd for ('            ??')", function () {
        let expectResult  = "even";
        let inputData = isOddOrEven("            ??");
        expect(inputData).to.be.equal(expectResult);
    });

    it("should return odd for ('            ??')", function () {
        let expectResult  = "odd";
        let inputData = isOddOrEven("            ?");
        expect(inputData).to.be.equal(expectResult);
    });
});
