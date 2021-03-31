// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar")

describe("caesarModule", () => {
  const cAlpha = {
    a: 1, b: 2, c: 3, d: 4, e: 5,
    f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15,
    p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24,y: 25,
    z: 26,
  };
    it("It relies on taking the alphabet and shifting letters to the right by 3 based on the typical alphabetic order.", () => {
     // const input = 'thinkful';
      const actual = caesarModule('thinkful', 3); //> 'wklqnixo'
      const expected = 'wklqnixo';
      expect(actual).to.equal(expected);
    });

    it("It relies on taking the alphabet and shifting letters to the left by 3 based on the typical alphabetic order.", () => {
      const input = 'thinkful';
      const actual = caesarModule(input, -3); //> 'qefkhcri'
      const expected = 'qefkhcri';
      expect(actual).to.equal(expected);
    });

    it("It relies on taking the alphabet and shifting letters to the right by 3 based on the typical alphabetic order and decoding it", () => {
        const input = 'wklqnixo';
        const encode = false;
        const actual = caesarModule(input, 3, encode); //> 'thinkful'
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
      });

    it("It relies on taking the alphabet and shifting letters to the right by 8 based on the typical alphabetic order, and space will be maintained", () => {
        const input = "This is a secret message!";
        const shift = 8;
        const actual = caesarModule(input, shift); //> 'bpqa qa i amkzmb umaaiom!'
        const expected = 'bpqa qa i amkzmb umaaiom!';
        expect(actual).to.equal(expected);
      });

    it("It relies on taking the alphabet and shifting letters to the right by 8 based on the typical alphabetic order, and space will be maintained, and encode is set to false", () => {
        const input = "BPQA qa I amkzmb umaaiom!";
        const shift = 8;
        const encode = false;
        const actual = caesarModule(input, shift, encode); //> 'this is a secret message!'
        const expected = 'this is a secret message!';
        expect(actual).to.equal(expected);
      });
//passed
    it("If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.", () => {
        const input = "thinkful";
        const actual = caesarModule((input)); //> false
        const expected = false;
        expect(actual).to.equal(expected);
      });
//passed
    it("If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.", () => {
        const input = "thinkful";
        const shift = 99;
        const actual = caesarModule((input, shift)); //> false
        const expected = false;
        expect(actual).to.equal(expected);
      });
//passed
    it("If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.", () => {
        const input = "thinkful";
        const shift = -26;
        const actual = caesarModule((input, shift)); //> false
        const expected = false;
        expect(actual).to.equal(expected);
      });
  });