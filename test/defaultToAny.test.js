import chai from "chai"
import defaultToAny from "../src/defaultToAny.js"

function TestObject(property) {
  this.property = property
}

describe("Number", () => {
 it("should return the input number", () =>{
     chai.expect(defaultToAny(1, 10, 20)).to.equal(1)
 });
})

describe("Number, undef", () => {
 it("should return the first default number", () =>{
     chai.expect(defaultToAny(undefined, 10, 20)).to.equal(10)
 });
})

describe("Number, null", () => {
 it("should return the first default number", () =>{
     chai.expect(defaultToAny(null, 10, 20)).to.equal(10)
 });
})

describe("Number, null, undef", () => {
 it("should return the second default number", () =>{
     chai.expect(defaultToAny(null, undefined, 20)).to.equal(20)
 });
})

describe("String", () => {
 it("should return the input string", () =>{
     chai.expect(defaultToAny("input", "hello", 20)).to.equal("input")
 });
})

describe("String, undef", () => {
 it("should return the first default string", () =>{
     chai.expect(defaultToAny(undefined, "hello", "default")).to.equal("hello")
 });
})

describe("String, null", () => {
 it("should return the first default string", () =>{
     chai.expect(defaultToAny(null, "hello", "default")).to.equal("hello")
 });
})

describe("Number, string, number", () => {
 it("should return the input value", () =>{
     chai.expect(defaultToAny(1, "hello", 20)).to.equal(1)
 });
})

describe("String with everything", () => {
 it("should return the input string", () =>{
     chai.expect(defaultToAny("hello", undefined, null, NaN, 25, "string")).to.equal("hello")
 });
})

describe("undef, null, NaN", () => {
 it("should return the input string", () =>{
     chai.expect(defaultToAny(undefined, null, NaN)).is.NaN
 });
})

describe("Object", () => {
 it("should return the test object", () =>{
    var testObj = new TestObject("test");
    var defaultObj = new TestObject("default");

    chai.expect(defaultToAny(testObj, null, defaultObj)).to.equal(testObj)
 });
})

describe("Object, number", () => {
 it("should return the default object", () =>{
    var defaultObj = new TestObject("default");

    chai.expect(defaultToAny(1, null, defaultObj)).to.equal(defaultObj)
 });
})

describe("Null, different types", () => {
 it("should return the default string", () =>{
    var defaultObj = new TestObject("default");

    chai.expect(defaultToAny(null, "string", defaultObj)).to.equal("string")
 });
})

describe("Everything is null or undef", () => {
 it("should return undefined", () =>{
    chai.expect(defaultToAny(null, null, undefined)).undefined
 });
})


