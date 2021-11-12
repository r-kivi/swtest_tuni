import chai from "chai"
import add from "../src/add.js"


describe("Positive number addition", () => {
 it("adds two positive numbers together", () =>{
     chai.expect(add(1,2)).to.equal(3)
 });
})

describe("Positive and negative number addition, positive result", () => {
 it("adds a positive and negative number together with a positive result", () =>{
     chai.expect(add(5,-1)).to.equal(4)
 });
})

describe("Positive and negative number addition, negative result", () => {
 it("adds a positive and negative number together with a negative result", () =>{
     chai.expect(add(5,-6)).to.equal(-1)
 });
})

describe("Negative number addition", () => {
 it("adds two negative numbers together", () =>{
     chai.expect(add(-1,-3)).to.equal(-4)
 });
})

describe("Zero addition", () => {
 it("adds zero to a number", () =>{
     chai.expect(add(2,0)).to.equal(2)
 });
})

describe("Positive infinity addition", () => {
 it("adds positive infinity to a number", () =>{
     chai.expect(add(2,Infinity)).to.equal(Infinity)
 });
})

describe("Negative infinity addition", () => {
 it("adds negative infinity to a  number", () =>{
     chai.expect(add(2,-Infinity)).to.equal(-Infinity)
 });
})


