import chai from "chai"
import ceil from "../src/ceil.js"

describe("Positive number, no precision", () => {
 it("should return ceiling without decimals", () =>{
     chai.expect(ceil(4.006)).to.equal(5)
 });
})

describe("Negative number, no precision", () => {
 it("should return ceiling without decimals", () =>{
     chai.expect(ceil(-4.006)).to.equal(-4)
 });
})

describe("Positive number, 2 decimal precision", () => {
 it("should return ceiling with 2 decimals", () =>{
     chai.expect(ceil(6.004, 2)).to.equal(6.01)
 });
})

describe("Negative number, 2 decimal precision", () => {
 it("should return ceiling with 2 decimals", () =>{
     chai.expect(ceil(-6.006, 2)).to.equal(-6.00)
 });
})

describe("Positive number, -2 decimal precision", () => {
 it("should return ceiling with two significant figures ", () =>{
     chai.expect(ceil(6040, -2)).to.equal(6100)
 });
})

describe("Negative number, -2 decimal precision", () => {
 it("should return ceiling with two significant figures", () =>{
     chai.expect(ceil(-6060, -2)).to.equal(-6000)
 });
})

describe("Zero, 2 decimals", () => {
 it("should return zero with two decimals", () =>{
     chai.expect(ceil(0, 2)).to.equal(0.00)
 });
})

describe("Zero, -2 decimals", () => {
 it("should return zero", () =>{
     chai.expect(ceil(0, -2)).to.equal(0)
 });
})

describe("Positive number, 0 decimal precision", () => {
 it("should return ceiling with no decimals", () =>{
     chai.expect(ceil(25.25, 0)).to.equal(26)
 });
})

describe("Infinity, 0 decimal precision", () => {
 it("should return infinity with no decimals", () =>{
     chai.expect(ceil(Infinity, 0)).to.equal(Infinity)
 });
})

describe("Infinity, 2 decimal precision", () => {
 it("should return infinity with no decimals", () =>{
     chai.expect(ceil(Infinity, 2)).to.equal(Infinity)
 });
})

describe("Negative infinity, 0 decimal precision", () => {
 it("should return negative infinity with no decimals", () =>{
     chai.expect(ceil(-Infinity, 0)).to.equal(-Infinity)
 });
})

describe("Negative infinity, 2 decimal precision", () => {
 it("should return negative infinity with no decimals", () =>{
     chai.expect(ceil(-Infinity, 2)).to.equal(-Infinity)
 });
})








