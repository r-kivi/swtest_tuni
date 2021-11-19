import chai from "chai"
import defaultToAny from "../src/defaultToAny.js"

function TestObject(property) {
  this.property = property
}

describe("Number input and defaults", () => {
 it("should return the input number", () =>{
     chai.expect(defaultToAny(1, 10, 20)).to.equal(1)
 });
})

describe("Number defaults, undef input", () => {
 it("should return the first default number", () =>{
     chai.expect(defaultToAny(undefined, 10, 20)).to.equal(10)
 });
})

describe("Number defaults, null input", () => {
 it("should return the first default number", () =>{
     chai.expect(defaultToAny(null, 10, 20)).to.equal(10)
 });
})

describe("Null input, number and undef default", () => {
 it("should return the second default number", () =>{
     chai.expect(defaultToAny(null, undefined, 20)).to.equal(20)
 });
})

describe("String input and defaults", () => {
 it("should return the input string", () =>{
     chai.expect(defaultToAny("input", "hello", 20)).to.equal("input")
 });
})

describe("String defaults, undef input", () => {
 it("should return the first default string", () =>{
     chai.expect(defaultToAny(undefined, "hello", "default")).to.equal("hello")
 });
})

describe("String defaults, null input", () => {
 it("should return the first default string", () =>{
     chai.expect(defaultToAny(null, "hello", "default")).to.equal("hello")
 });
})

describe("Number input, string and number defaults", () => {
 it("should return the input value", () =>{
     chai.expect(defaultToAny(1, "hello", 20)).to.equal(1)
 });
})

describe("String input, defaults: undef, null, NaN, number, string", () => {
 it("should return the input string", () =>{
     chai.expect(defaultToAny("hello", undefined, null, NaN, 25, "string")).to.equal("hello")
 });
})

describe("Undefined input, null and NaN default", () => {
 it("should return NaN", () =>{
     chai.expect(defaultToAny(undefined, null, NaN)).is.NaN
 });
})

describe("Object input, null and object default", () => {
 it("should return the test object", () =>{
    var testObj = new TestObject("test");
    var defaultObj = new TestObject("default");

    chai.expect(defaultToAny(testObj, null, defaultObj)).to.equal(testObj)
 });
})

describe("Number input, null and object default", () => {
 it("should return the default object", () =>{
    var defaultObj = new TestObject("default");

    chai.expect(defaultToAny(1, null, defaultObj)).to.equal(defaultObj)
 });
})

describe("Null input, string and object default", () => {
 it("should return the default string", () =>{
    var defaultObj = new TestObject("default");

    chai.expect(defaultToAny(null, "string", defaultObj)).to.equal("string")
 });
})

describe("Null input, null and undef default", () => {
 it("should return undefined", () =>{
    chai.expect(defaultToAny(null, null, undefined)).undefined
 });
})

describe("Only one default, correct input", () => {
 it("should return undefined", () =>{
    chai.expect(defaultToAny(1, 10)).to.equal(1);
 });
})

describe("Only one default, null input", () => {
 it("should return undefined", () =>{
    chai.expect(defaultToAny(null, 10)).to.equal(10);
 });
})



