import chai from "chai"
import isEmpty from "../src/isEmpty.js"

function TestObject(property) {
  this.property = property
}

 describe("Null input", () => {
 it("should return true", () =>{
     chai.expect(isEmpty(null)).to.be.true
 });
})

 describe("True input", () => {
 it("should return true", () =>{
     chai.expect(isEmpty(true)).to.be.true
 });
})

 describe("False input", () => {
 it("should return true", () =>{
     chai.expect(isEmpty(false)).to.be.true
 });
})

 describe("Positive number input", () => {
 it("should return true", () =>{
     chai.expect(isEmpty(1)).to.be.true
 });
})

 describe("Negative number input", () => {
 it("should return true", () =>{
     chai.expect(isEmpty(-5)).to.be.true
 });
})

 describe("Array with numbers", () => {
 it("should return false", () =>{
     chai.expect(isEmpty([1, 2, 3])).to.be.false
 });
})

 describe("Array with strings", () => {
 it("should return false", () =>{
     chai.expect(isEmpty(["cool", "beans"])).to.be.false
 });
})

 describe("Empty array", () => {
 it("should return true", () =>{
     chai.expect(isEmpty([])).to.be.true
 });
})

 describe("String input", () => {
 it("should return false", () =>{
     chai.expect(isEmpty(["cool beans"])).to.be.false
 });
})

 describe("Map with string keys and string values", () => {
 it("should return false", () =>{
     chai.expect(isEmpty({"cool" : "beans", "more" : "values"})).to.be.false
 });
})

 describe("Map with int keys and int values", () => {
 it("should return false", () =>{
     chai.expect(isEmpty({3 : 5, 4 : -99})).to.be.false
 });
})

 describe("Empty map", () => {
 it("should return true", () =>{
     chai.expect(isEmpty({})).to.be.true
 });
})

 describe("Object input", () => {
 it("should return false", () =>{

    var defaultObj = new TestObject("default");
     chai.expect(isEmpty({defaultObj})).to.be.false
 });
})