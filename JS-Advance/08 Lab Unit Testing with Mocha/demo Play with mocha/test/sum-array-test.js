let sum = require("../sum-array").sum; // import sum of another file, withdraw  data  of  inner - internal - outside  world-file
let expect = require("chai").expect; // import global library 'chai'

describe("Test sum(arr)", function () {    //  this is simple comment,annotation - коментар
         it("should return 3 for [1,2]", function () {  // in to same function paste same TESTS
           let expectedSum = 3;  // i expect-очаквам to recive sum  3
             let actualSum = sum([1,2]); // that is realy happens actualSum = sum 1 + 2
             expect(actualSum).to.be.equal(expectedSum);//expect-очакваi actualSum = expectedSum
         });

        it("should return 5 for [5]", function () {  // in to same function paste same TESTS
            let expectedSum = 5;  // i expect-очаквам to recive sum  3
            let actualSum = sum([5]); // that is realy happens actualSum = sum 1 + 2
            expect(actualSum).to.be.equal(expectedSum);//expect-очакваi actualSum = expectedSum
        });

    it("should return 0 for []", function () {  // in to same function paste same TESTS
        let expectedSum = 0;  // i expect-очаквам to recive sum  3
        let actualSum = sum([]); // that is realy happens actualSum = sum 1 + 2
        expect(actualSum).to.be.equal(expectedSum);//expect-очакваi actualSum = expectedSum
    });

    it("should return undefined for ['4ikiriki', 'musaka']", function () {  // in to same function paste same TESTS
        let expectedSum = NaN;  // i expect-очаквам to recive sum  3
        let actualSum = sum(['4ikiriki', 'musaka']); // that is realy happens actualSum = sum 1 + 2
        expect(actualSum).to.be.NaN;//expect-очакваi actualSum = expectedSum
    });

            // expect(sum([1,2]).equal(3));   SHOWR way for write Up  expression
}); // is part of mocha
console.log(sum([2,3]));