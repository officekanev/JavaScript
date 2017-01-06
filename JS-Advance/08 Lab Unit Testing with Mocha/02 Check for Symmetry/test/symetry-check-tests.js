let isSymmetric = require("../symetry-check").isSymmetric;
let expect = require("chai").expect; // import global library 'chai'

describe("Test isSymmetric(arr)", function () {    //  this is simple comment,annotation - коментар
    it("should return true for [1,2,3,3,2,1]", function () {
        let expectedTrue = true;
        let symmetric = isSymmetric([1,2,3,3,2,1]);
        expect(symmetric).to.be.equal(expectedTrue);
    });

    it("should return false for [1,2,3,4,2,1]", function () {
        let expectedTrue = false;  //
        let symmetric = isSymmetric([1,2,3,4,2,1]);
        expect(symmetric).to.be.equal(expectedTrue);
    });

    it("should return true for []", function () {
        let expectedTrue = true;  //
        let symmetric = isSymmetric([]);
        expect(symmetric).to.be.equal(expectedTrue);
    });

    it("should return false for [1,2]", function () {
        let expectedTrue = false;  //
        let symmetric = isSymmetric([1,2]);
        expect(symmetric).to.be.equal(expectedTrue);
    });

    it("should return false for [1,2]", function () {
        let expectedTrue = false;  //
        let symmetric = isSymmetric([1,2]);
        expect(symmetric).to.be.equal(expectedTrue);
    });

    it("should return false for 1,2,3,4", function () {
        let expectedTrue = false;  //
        let symmetric = isSymmetric(1,2,3,4);
        expect(symmetric).to.be.equal(expectedTrue);
    });

    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        let expectedTrue = true;  //
        let symmetric = isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5]);
        expect(symmetric).to.be.equal(expectedTrue);
    });

    // it("should return false for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
    //     let expectedTrue = false;  //
    //     let symmetric = isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5]);
    //     expect(symmetric).to.be.equal(expectedTrue);
    // });

    
});
console.log(isSymmetric([1,2,3,3,2,1]));