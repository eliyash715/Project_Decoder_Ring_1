// Write your tests here!
const { expect } = require("chai");
const substitutionModule = require("../src/substitution");
describe("substitutionModule", () => {
    const regAlpha = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6,
        g: 7, h: 8, i: 9, j: 10, k: 11, l: 12,
        m: 13, n: 14, o: 15, p: 16, q: 17, r: 18,
        s: 19, t: 20, u: 21, v: 22, w: 23, x: 24,
        y: 25, z: 26,
      };
//passed     
    it("The inputted text to be encoded or decoded and alphabet refers to substitution alphabet.", () => {
      const actual = substitutionModule("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
      const expected = 'jrufscpw';
      expect(actual).to.equal(expected);
    });
//passed
    it("The inputted text to be encoded or decoded and alphabet refers to substitution alphabet.", () => {
        const actual = substitutionModule("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne';
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected);
      });
//passed
    it("The inputted text to be encoded or decoded and alphabet refers to substitution alphabet.", () => {
        const actual = substitutionModule("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful';
        const expected = 'thinkful';
        expect(actual).to.equal(expected);
      });
//passed
    it("The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.", () => {
        const actual = substitutionModule("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"; 
        const expected = "y&ii$r&";
        expect(actual).to.equal(expected);
      });    
//passed
    it("The input could include spaces and letters as well as special characters such as #, $, *, etc.", () => {
        const actual = substitutionModule("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message";
        const expected = "message";
        expect(actual).to.equal(expected);
      });
//passed
    it("The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.", () => {
        const actual = substitutionModule("thinkful", "short"); //> false; 
        const expected = false;
        expect(actual).to.equal(expected);
      });
//passed
    it("All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.", () => {
        const actual = substitutionModule("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false;  
        const expected = false;
        expect(actual).to.equal(expected);
      });
});