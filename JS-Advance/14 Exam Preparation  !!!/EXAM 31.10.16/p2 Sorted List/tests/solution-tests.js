let SortedList = require('../solution').SortedList;
let expect = require("chai").expect;

describe("SortedList", function () {
    let myList = {};

    beforeEach(function () {
        myList = new SortedList();
    });

    it("should have a function", function () {
        expect(typeof SortedList).to.equal('function');
    });

    it("should have a method add()", function () {
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
    });

    it("should have a method remove()", function () {
        expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
    });

    it("should have a method get()", function () {
        expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
    });

    it("should have a method size()", function () {
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
    });

    it("should have a size property", function () {
        expect(myList.size).to.equal(0);
    });

    it("should have corectly work add()", function () {
        myList.add(5);
        expect(myList.size).to.equal(1);
    });

    it("should have corectly work add()", function () {
        myList.add(5);
        expect(myList.get(0)).to.equal(5);
    });

    it("should have corectly sorted", function () {
        myList.add(4);
        myList.add(3);
        myList.add(10);
        myList.add(1);
        expect(myList.get(0)).to.equal(1);
        expect(myList.get(1)).to.equal(3);
        expect(myList.get(2)).to.equal(4);
        expect(myList.get(3)).to.equal(10);
        expect(myList.size).to.equal(4);
    });

    it("should have corectly return size of array, when remove element", function () {
        myList.add(4);
        myList.add(3);
        myList.add(10);
        myList.add(1);
        myList.remove(1);
        expect(myList.get(0)).to.equal(1);
        expect(myList.get(1)).to.equal(4);
        expect(myList.get(2)).to.equal(10);
        expect(myList.size).to.equal(3);
    });

    it("should have corectly return size of array", function () {
        myList.add(4);
        myList.add(3);
        myList.add(10);
        myList.add(1);
        expect(myList.size).to.equal(4);
    });

    it("should have a size property", function () {
        expect(myList.size).to.equal(0);
    });

    it("should not work with negative index", function () {
        myList.add(4);
        myList.add(3);
        myList.add(10);
        myList.add(1);
        expect(() => myList.get(-1)).to.throw(Error); //  check for throw error  of negative numbers
        expect(() => myList.remove(-1)).to.throw(Error); //  check for throw error  .remove
    });

    it("should not work with outside index", function () {
        myList.add(4);
        myList.add(3);
        myList.add(10);
        myList.add(1);
        expect(() => myList.get(5)).to.throw(Error); //  check for throw error  of negative numbers
        expect(() => myList.remove(5)).to.throw(Error); //  check for throw error  .remove
    });

    it("should not work with empty Array", function () {

        expect(() => myList.get(0)).to.throw(Error); //  check for throw error  of negative numbers
        expect(() => myList.remove(0)).to.throw(Error); //  check for throw error  .remove
    });
});