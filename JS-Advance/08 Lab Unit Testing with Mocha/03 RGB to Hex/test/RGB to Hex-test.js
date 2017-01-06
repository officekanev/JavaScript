let rgbToHexColor = require("../RGB to Hex").rgbToHexColor;
let expect = require("chai").expect;

describe("test rgbToHexColor(arr)  for corect output ", function () {
    it("should return #FF9EAA for (255, 158, 170)", function () {
        let expectResult = "#FF9EAA";
        let test = rgbToHexColor(255, 158, 170);
        expect(test).to.equal(expectResult);
    });

    it("should return #FF9EAA for (12,13,14)", function () {
        let expectResult = "#0C0D0E";
        let test = rgbToHexColor(12,13,14);
        expect(test).to.be.equal(expectResult);
    });

    it("should return #FF9EAA for (0,0,0)", function () {
        let expectResult = "#000000";
        let test = rgbToHexColor(0,0,0);
        expect(test).to.be.equal(expectResult);
    });

    it("should return #FF9EAA for (255,255,255)", function () {
        let expectResult = "#FFFFFF";
        let test = rgbToHexColor(255,255,255);
        expect(test).to.be.equal(expectResult);
    });

    it("should return #FF9EAA for (-1,0,0)", function () {
        let expectResult = undefined;
        let test = rgbToHexColor(-1,0,0);
        expect(test).to.be.equal(expectResult);
    });

    it("should return #FF9EAA for (0,-1,0)", function () {
        let expectResult = undefined;
        let test = rgbToHexColor(0,-1,0);
        expect(test).to.be.equal(expectResult);
    });

    it("should return #FF9EAA for (0,0,-1)", function () {
        let expectResult = undefined;
        let test = rgbToHexColor(0,0,-1);
        expect(test).to.be.equal(expectResult);
    });

    it("should return #FF9EAA for (256,0,0)", function () {
        let expectResult = undefined;
        let test = rgbToHexColor(256,0,0);
        expect(test).to.be.equal(expectResult);
    });

    it("should return #FF9EAA for (0,256,0)", function () {
        let expectResult = undefined;
        let test = rgbToHexColor(0,256,0);
        expect(test).to.be.equal(expectResult);
    });

    it("should return #FF9EAA for (0,0,256)", function () {
        let expectResult = undefined;
        let test = rgbToHexColor(0,0,256);
        expect(test).to.be.equal(expectResult);
    });

    it("should return #FF9EAA for (2.09,0,0)", function () {
        let expectResult = undefined;
        let test = rgbToHexColor(2.09,0,0);
        expect(test).to.be.equal(expectResult);
    });

    it("should return #FF9EAA for (0,3.8,0)", function () {
        let expectResult = undefined;
        let test = rgbToHexColor(0,3.8,0);
        expect(test).to.be.equal(expectResult);
    });

    it("should return #FF9EAA for (0,0,4.098)", function () {
        let expectResult = undefined;
        let test = rgbToHexColor(0,0,4.098);
        expect(test).to.be.equal(expectResult);
    });

    it("should return #FF9EAA for ('6',[8],{6:2})", function () {
        let expectResult = undefined;
        let test = rgbToHexColor('6',[8],{6:2});
        expect(test).to.be.equal(expectResult);
    });

});

console.log(rgbToHexColor(255, 158, 170));

