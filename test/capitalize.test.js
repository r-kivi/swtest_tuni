import chai from "chai"
import capitalize from "../src/capitalize.js"

describe("Lowercase word", () => {
 it("should return same word with first letter capitalized", () =>{
     chai.expect(capitalize("word")).to.equal("Word")
 });
})

describe("First letter lowercase, all others uppercase", () => {
 it("should return the word with first letter capitalized, all others lowercase", () =>{
     chai.expect(capitalize("wORD")).to.equal("Word")
 });
})

describe("First letter uppercase, all others lowercase", () => {
 it("should return the input as is", () =>{
     chai.expect(capitalize("Word")).to.equal("Word")
 });
})

describe("Two words in one string", () => {
 it("should return the first word's first letter capitalized", () =>{
     chai.expect(capitalize("two words")).to.equal("Two words")
 });
})

describe("Two words in one string, both capitalized", () => {
 it("should return the string with only the first word's first letter capitalized", () =>{
     chai.expect(capitalize("Two Words")).to.equal("Two words")
 });
})

describe("Empty string", () => {
 it("should return an empty string", () =>{
     chai.expect(capitalize("")).to.equal("")
 });
})

describe("Single space", () => {
 it("should return a signle space", () =>{
     chai.expect(capitalize(" ")).to.equal(" ")
 });
})

describe("Symbol in front", () => {
 it("should return the string as is", () =>{
     chai.expect(capitalize("-asd")).to.equal("-asd")
 });
})

describe("Symbol in front with uppercase text after", () => {
 it("should return the string with text set to lowercase", () =>{
     chai.expect(capitalize("-ASd")).to.equal("-asd")
 });
})