let expect = require("chai").expect;

function produce(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
}


// let list = (function(){             ORIGINAL INPUT
//     let data = [];
//     return {
//         add: function(item) {
//             data.push(item);
//         },
//         delete: function(index) {
//             if (Number.isInteger(index) && index >= 0 && index < data.length) {
//                 return data.splice(index, 1)[0];
//             } else {
//                 return undefined;
//             }
//         },
//         toString: function() {
//             return data.join(", ");
//         }
//     };
// })();
//
// module.exports = {list};

describe('list' , function () {
    let list = {};

    beforeEach(function () { // when testing IIFE we not required to have beforeEach
        list = produce();
    });

    it("should have a empty array", function () {
        expect(list.toString()).to.equal('','to string is not working');
        expect(list.size).to.equal(undefined);
    });

    it("should have a empty array", function () {
        list.add(5);
        expect(list.toString()).to.equal('5');
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('pepi');
        list.add('musaka');
        list.add(3.14);
        expect(list.toString()).to.equal('5, pepi, musaka, 3.14');
    });

    it("should have a empty array", function () {
        list.delete(-2);
        expect(list.delete()).to.equal(undefined);
    });

    it("should have a empty array", function () {
        list.delete(0);
        expect(list.delete()).to.equal(undefined);
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('two');
        expect(list.delete(2)).to.equal(undefined);
    });

    it("should have a empty array", function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.delete(0);
        list.delete(3);
        expect(list.toString()).to.equal('2, 3, 4');
    });

    it("should have a function", function () {
        expect(typeof produce).to.equal('function');
    });

    it("should have a method add()", function () {
        expect(list.hasOwnProperty('add')).to.equal(true);
    });

    it("should have a method remove()", function () {
        expect(list.hasOwnProperty('delete')).to.equal(true);
    });

    it("should have a method get()", function () {
        expect(list.hasOwnProperty('toString')).to.equal(true);
    });
                       //             TEST OF THE HACERS
    // it("should have a method get()", function () { // another way to check for function
    //     expect(typeof(list.add()).to.equal('function'));
    //     expect(typeof(list.delete()).to.equal('function'));
    //     expect(typeof(list.toString()).to.equal('function'));
    // });

    it("with comand delete string return undefined", function () {
        expect(list.delete('Pesho')).to.equal(undefined);
    });

    it("with comand delete string return undefined", function () {
        expect(list.delete(3.14)).to.equal(undefined);
    });

    it("with comand delete string return undefined", function () {
        expect(list.delete('Pesho')).to.equal(undefined);
    });

    it("check whether delete work corektly ", function () {
        list.add(5);
        list.delete(3.45);
        expect(list.toString()).to.equal('5');
    });

    it("should have a empty array", function () {
        list.delete(0);
        expect(list.delete()).to.equal(undefined);
    });

    it("should have a empty array", function () {
        list.delete(0);
        expect(list.toString()).to.equal('');
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('two');
        expect(list.delete(2)).to.equal(undefined);
    });

    it("should have a empty array", function () {
        list.add(5);
        expect(list.delete(0)).to.equal(5);
    });

    it("should corectly delete element by given index", function () {
        list.add(5);
        list.add(3);
        list.add(8);
        expect(list.delete(2)).to.equal(8);
    });

    it("should corectly delete element by given index", function () {
        list.add(5);
        list.add('ivan');
        list.add(8);
        expect(list.delete(1)).to.equal('ivan');
        expect(list.toString()).to.equal('5, 8');
        expect(list.delete(1)).to.equal(8);
        expect(list.toString()).to.equal('5');
        expect(list.delete(0)).to.equal(5);
        expect(list.toString()).to.equal('');
    });

    it("should have a empty array", function () {
        list.add(5);
        list.add('two');
        expect(list.delete(2)).to.equal(undefined);
        expect(list.toString()).to.equal('5, two');
    });

    it("should have a empty array", function () {
        list.add('five');
        expect(list.delete(-4)).to.equal(undefined);
        expect(list.toString()).to.equal('five');
    });
});



//=============================================================
//                                mustafov

let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();


list.add(5);
list.add(66);

console.log(list.toString());


describe("TODO …", function() {
    it("Test", function() {
        list.add(3);
        let deleted = list.delete(0);
        expect(deleted).to.be.equal(3);
    });
    it("Test", function() {
        expect(list.delete('pesho')).to.be.equal(undefined);
    });
    it("Test", function() {
        list.add(5);
        list.add(66);
        expect(list.toString()).to.be.equal('5, 66');
    });
    it("Test", function() {
        list.add(3);
        expect(list.delete(-5)).to.be.equal(undefined);
    });
    it("Test", function() {
        list.add(5);
        list.add(66);
        list.add(45);
        list.delete(1);
        list.add(78);
        expect(list.toString()).to.be.equal('5, 45, 78');
    });
    it("Test", function() {
        expect(list.toString()).to.be.equal('');
    });
});