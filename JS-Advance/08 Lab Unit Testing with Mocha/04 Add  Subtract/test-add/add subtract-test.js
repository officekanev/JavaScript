let createCalculator = require("../add subtract").createCalculator;
let expect = require("chai").expect;

describe("Test create isSymmetric(arr)", function () {
    let calc;

    beforeEach(function () {
        calc = createCalculator();
    });

    it("should return 0 for empty calculator", function () {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });

    it("should return -5 for add(2), add(3)", function () {
        calc.add(2);
        calc.add(3);
        let value = calc.get();
        expect(value).to.be.equal(5);
    });

    it("should return NaN for add('pesho')", function () {
       calc.add("pesho");
        let value = calc.get();
        expect(Number.isNaN(value)).to.be.equal(true);
    });

    it("should return NaN for subtract('pesho')", function () {
        calc.subtract("pesho");
        let value = calc.get();
        expect(Number.isNaN(value)).to.be.equal(true);
    });

    it("should return 4.2 for add(5.3), add(1.1)", function () {
        calc.add(Number(5.3));
        calc.subtract(Number(1.1));
        let value = (Number(calc.get().toFixed(1)));
        expect(value).to.be.equal(Number(4.2));
    });

    it("should return 2 for add(10), subtract('7'),add('-2'),subtract('-1)", function () {
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract(-1);
        let value = calc.get();
        expect(value).to.be.equal(2);
    });


});