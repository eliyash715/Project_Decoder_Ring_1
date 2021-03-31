// Write your tests here!
const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybiusModule", () => {
    const polyAlpha = {
        a: 11, b: 21, c: 31, d: 41, e: 51, f: 12, g: 22,
        h: 32, i: 42, j: 42, k: 52, l: 13, m: 23, n: 33,
        o: 43, p: 53, q: 14, r: 24, s: 34, t: 44, u: 54,
        v: 15, w: 25, x: 35, y: 45, z: 55,
      };
      const polyNums = {};
//passed
    it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.", () => {
      const actual = polybiusModule(("thinkful")); //> "4432423352125413"
      const expected = "4432423352125413";
      expect(actual).to.equal(expected);
    });
//passed
    it("The inputted text to be encoded or decoded.", () => {
        const actual = polybiusModule(("Hello world")); //> '3251131343 2543241341'
        const expected = '3251131343 2543241341';
        expect(actual).to.equal(expected);
      });
//passed
    it("The inputted text to be encoded or decoded.", () => {
        const actual = polybiusModule("3251131343 2543241341", false); //> "hello world")); 
        const expected = "hello world";
        expect(actual).to.equal(expected);
      });
//passed
    it("The letters I and J share a space, when decoding, both letters should somehow be shown.", () => {
        const actual = polybiusModule("4432423352125413", false); //> "th(i/j)nkful";
        const expected = "th(i/j)nkful";
        expect(actual).to.equal(expected);
      });
//passed
    it("When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false", () => {
        const actual = polybiusModule("44324233521254134", false); //> false);
        const expected = false;
        expect(actual).to.equal(expected);
      });
});