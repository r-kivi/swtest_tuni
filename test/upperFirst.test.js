import chai from "chai"
import upperFirst from "../src/upperFirst.js"

describe("Lowercase word", () => {
 it("should return same word with first letter capitalized", () =>{
     chai.expect(upperFirst("word")).to.equal("Word")
 });
})

describe("First letter lowercase, all others uppercase", () => {
 it("should return the entire word capitalized", () =>{
     chai.expect(upperFirst("wORD")).to.equal("WORD")
 });
})

describe("First letter uppercase, all others lowercase", () => {
 it("should return the input as is", () =>{
     chai.expect(upperFirst("Word")).to.equal("Word")
 });
})

describe("Two words in one string", () => {
 it("should return the first word's first letter capitalized", () =>{
     chai.expect(upperFirst("two words")).to.equal("Two words")
 });
})

describe("Empty string", () => {
 it("should return an empty string", () =>{
     chai.expect(upperFirst("")).to.equal("")
 });
})

describe("Single space", () => {
 it("should return a signle space", () =>{
     chai.expect(upperFirst(" ")).to.equal(" ")
 });
})

describe("Symbol in front", () => {
 it("should return the string as is", () =>{
     chai.expect(upperFirst("-asd")).to.equal("-asd")
 });
})



