let mathEnforcer = require("../Math Enforcer").mathEnforcer;
let expect = require("chai").expect;

describe('mathEnForcer', function () {
    describe('addFive', function () {
        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.addFive('a');
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.addFive(NaN);
            expect(Number.isNaN(input)).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.addFive(NaN);
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.addFive([]);
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.addFive([1]);
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.addFive({"name":"iosko", "age":"20"});
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.addFive({});
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = 10;
            let input = mathEnforcer.addFive(5);
            expect(input).to.be.equal(expectResult)
        });
    });

    describe('subtractTen', function () {
        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.subtractTen('a');
            expect(input).to.be.equal(expectResult)
        });

        // it("with a non-number parameter, should return correct result", function () {
        //     let expectResult = undefined;
        //     let input = mathEnforcer.subtractTen(NaN);
        //     expect(input).to.be.equal(expectResult)
        // });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.subtractTen([]);
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.subtractTen([1]);
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.subtractTen({"name":"iosko", "age":"20"});
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.subtractTen({});
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = -5;
            let input = mathEnforcer.subtractTen(5);
            expect(input).to.be.equal(expectResult)
        });
    });

    describe('sum', function () {
        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.sum('a',1);
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.sum(1,'a');
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.sum([1],1);
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.sum(1,[1]);
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.sum([]);
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.sum(1,{"age":"5"});
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.sum({"age":"5"}, 1);
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.sum([1,1]);
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.sum({"name":"iosko", "age":"20"});
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = undefined;
            let input = mathEnforcer.sum({});
            expect(input).to.be.equal(expectResult)
        });

        it("with a non-number parameter, should return correct result", function () {
            let expectResult = 10;
            let input = mathEnforcer.sum(5,5);
            expect(input).to.be.equal(expectResult)
        });
    });
});