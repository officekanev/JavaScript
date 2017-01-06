let lookupChar = require("../Char Lookup").lookupChar;
let expect = require('chai').expect;

describe("Test lookupChar('pepi','uha') for undefined", function () {
    it("should return undefined for lookupChar('pepi','uha')", function () {
        let expectAnswer = undefined;
        let currentInput = lookupChar('pepi','uha');
        expect(currentInput).to.be.equal(expectAnswer);
    });

    it("should return Incorrect index for lookupChar('baba qga gleda',101)", function () {
        let expectAnswer = "Incorrect index";
        let currentInput = lookupChar('baba qga gleda',101);
        expect(currentInput).to.be.equal(expectAnswer);
    });

    it("should return Incorrect index for lookupChar('baba qga gleda',-1)", function () {
        let expectAnswer = "Incorrect index";
        let currentInput = lookupChar('baba qga gleda',-1);
        expect(currentInput).to.be.equal(expectAnswer);
    });

    it("should return Incorrect index for lookupChar('baba qga gleda',101)", function () {
        let text = "baba qga gleda";
        let index = 3;
        expect(text.charAt(index)).to.be.equal(lookupChar('baba qga gleda',3));
    });

    it("should return undefined for lookupChar('baba qga gleda', [1,2])", function () {
        let expectAnswer = undefined;
        let currentInput = lookupChar('baba qga gleda', [1,2]);
        expect(currentInput).to.be.equal(expectAnswer);
    });

    it("should return undefined for lookupChar('baba qga gleda', {name:ivan, age:56})", function () {
        let expectAnswer = undefined;
        let currentInput = lookupChar('baba qga gleda', {"name":"ivan", "age":"56"});
        expect(currentInput).to.be.equal(expectAnswer);
    });

    it("should return undefined for lookupChar(13,1)", function () {
        let expectAnswer = undefined;
        let currentInput = lookupChar(13,1);
        expect(currentInput).to.be.equal(expectAnswer);
    });

});
