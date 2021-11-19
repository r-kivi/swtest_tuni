import chai from "chai"
import defaultTo from "../src/defaultTo.js"

function TestObject(property) {
  this.property = property
}

describe("Number default, number input", () => {
 it("should return the input number", () =>{
     chai.expect(defaultTo(1, 10)).to.equal(1)
 });
})

describe("Null input, default number", () => {
 it("should return the default value (10)", () =>{
     chai.expect(defaultTo(null, 10)).to.equal(10)
 });
})

describe("Number default, undefined input", () => {
 it("should return the default value (10)", () =>{
     chai.expect(defaultTo(undefined, 10)).to.equal(10)
 });
})

describe("Number default, NaN input", () => {
 it("should return the default value (10)", () =>{
     chai.expect(defaultTo(NaN, 10)).to.equal(10)
 });
})

describe("Number default, string input", () => {
 it("should return the default value (10)", () =>{
     chai.expect(defaultTo("This is not a number", 10)).to.equal(10)
 });
})

describe("Number default, positive infinity input", () => {
 it("should return infinity", () =>{
     chai.expect(defaultTo(Infinity, (10))).to.equal(Infinity)
 });
})

describe("String default and input", () => {
 it("should return the input string", () =>{
     chai.expect(defaultTo("hello", "default")).to.equal("hello")
 });
})

describe("String default, null input", () => {
 it("should return the default string", () =>{
     chai.expect(defaultTo(null, "default")).to.equal("default")
 });
})

describe("String default, undefined input", () => {
 it("should return the default string", () =>{
     chai.expect(defaultTo(undefined, "default")).to.equal("default")
 });
})

describe("String default, number input", () => {
 it("should return the default string", () =>{
     chai.expect(defaultTo(15, "default")).to.equal("default")
 });
})


describe("Object default and input", () => {
 it("should return the input object", () =>{
    var testObj = new TestObject("test");
    var defaultObj = new TestObject("default");

    chai.expect(defaultTo(testObj, defaultObj)).to.equal(testObj)
 });
})

describe("Object default, number input", () => {
 it("should return the default object", () =>{
    var defaultObj = new TestObject("default");

    chai.expect(defaultTo(1, defaultObj)).to.equal(defaultObj)
 });
})

describe("Object default, string input", () => {
 it("should return the default object", () =>{
    var defaultObj = new TestObject("default");

    chai.expect(defaultTo("tetetete", defaultObj)).to.equal(defaultObj)
 });
})

describe("Object default, null input", () => {
 it("should return the default object", () =>{
    var defaultObj = new TestObject("default");

    chai.expect(defaultTo(null, defaultObj)).to.equal(defaultObj)
 });
})

describe("Object default, undefined input", () => {
 it("should return the default object", () =>{
    var defaultObj = new TestObject("default");

    chai.expect(defaultTo(undefined, defaultObj)).to.equal(defaultObj)
 });
})




