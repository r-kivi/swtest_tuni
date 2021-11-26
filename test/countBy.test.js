import chai from "chai"
import countBy from "../src/countBy.js"

//example case from documentation
const users = [
    {"user": "barney", "active": true},
    {"user": "betty", "active": true},
    {"user": "fred", "active": false}
]

const res = {"true": 2, "false": 1}

describe("Counting boolean object properties", () => {
    it("Should return 2 for true and 1 for false", () => {
        chai.expect(countBy(users, value => value.active)).to.deep.equal(res)
    })
})

const ages = [
    {"name": "tom", "age": 31},
    {"name": "jack", "age": 16},
    {"name": "jeff", "age": 31},
    {"name": "steve", "age": Infinity}
]

const res2 = {31: 2, 16: 1, Infinity: 1}

describe("Counting numerical properties", () => {
    it("Should return 2 for 31, 1 for 16 and 1 for infinity", () => {
        chai.expect(countBy(ages, value => value.age)).to.deep.equal(res2)
    })
})

const arr = [1,2,3,1,1,1,5,5,6]

const res3 = {1:4, 2:1, 3:1, 5:2, 6:1}

describe("Counting numbers in array", () => {
    it("Should return an object matching res3", () => {
        chai.expect(countBy(arr, value => value)).to.deep.equal(res3)
    })
})