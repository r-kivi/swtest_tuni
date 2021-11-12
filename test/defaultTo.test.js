import chai from "chai"
import defaultTo from "../src/defaultTo.js"

function TestObject(property) {
  this.property = property
}

describe("Number", () => {
 it("should return the input number", () =>{
     chai.expect(defaultTo(1, 10)).to.equal(1)
 });
})

describe("Number, null", () => {
 it("should return the default value (10)", () =>{
     chai.expect(defaultTo(null, 10)).to.equal(10)
 });
})

describe("Number, undefined", () => {
 it("should return the default value (10)", () =>{
     chai.expect(defaultTo(undefined, 10)).to.equal(10)
 });
})

describe("Number, NaN", () => {
 it("should return the default value (10)", () =>{
     chai.expect(defaultTo(NaN, 10)).to.equal(10)
 });
})

describe("Number, string", () => {
 it("should return the default value (10)", () =>{
     chai.expect(defaultTo("This is not a number", 10)).to.equal(10)
 });
})

describe("Number, infinity", () => {
 it("should return infinity", () =>{
     chai.expect(defaultTo(Infinity, (10))).to.equal(Infinity)
 });
})

describe("String", () => {
 it("should return the input string", () =>{
     chai.expect(defaultTo("hello", "default")).to.equal("hello")
 });
})

describe("String, null", () => {
 it("should return the default string", () =>{
     chai.expect(defaultTo(null, "default")).to.equal("default")
 });
})

describe("String, undefined", () => {
 it("should return the default string", () =>{
     chai.expect(defaultTo(undefined, "default")).to.equal("default")
 });
})

describe("String, number", () => {
 it("should return the default string", () =>{
     chai.expect(defaultTo(15, "default")).to.equal("default")
 });
})


describe("Object", () => {
 it("should return the test object", () =>{
    var testObj = new TestObject("test");
    var defaultObj = new TestObject("default");

    chai.expect(defaultTo(testObj, defaultObj)).to.equal(testObj)
 });
})

describe("Object, number", () => {
 it("should return the default object", () =>{
    var defaultObj = new TestObject("default");

    chai.expect(defaultTo(1, defaultObj)).to.equal(defaultObj)
 });
})

describe("Object, string", () => {
 it("should return the default object", () =>{
    var defaultObj = new TestObject("default");

    chai.expect(defaultTo("tetetete", defaultObj)).to.equal(defaultObj)
 });
})

describe("Object, null", () => {
 it("should return the default object", () =>{
    var defaultObj = new TestObject("default");

    chai.expect(defaultTo(null, defaultObj)).to.equal(defaultObj)
 });
})

describe("Object, undefined", () => {
 it("should return the default object", () =>{
    var defaultObj = new TestObject("default");

    chai.expect(defaultTo(undefined, defaultObj)).to.equal(defaultObj)
 });
})




