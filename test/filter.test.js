import chai from "chai"
import filter from "../src/filter.js"

//example case mentioned in the documentation
const users = [
       { 'user': 'barney', 'active': true },
       { 'user': 'fred',   'active': false }
     ]

describe("Removing objects with wrong property values", () => {
    it("Should remove all objects where active is not truthy", () => {
        chai.expect(filter(users, ({active}) => active)).to.deep.equal(users.slice(0,1))
    })
})

const products = [
    {"product": "tomato", "price": 0.20},
    {"product": "chips", "price": 2.50},
    {"product": "soda", "price": 1.20},
    {"product": "gasoline", "price": Infinity},
    {"product": "free money", "price": Number.NEGATIVE_INFINITY},
    {"product": "milk", "price": 0.80}
]

describe("Filtering objects with numerical properties", () => {
    it("Should remove all objects where price is lower than 1.00", () => {
        chai.expect(filter(products, ({price}) => price > 1.00)).to.deep.equal(products.slice(1,4))
    })
})

const empty = []

describe("Filtering empty array", () => {
    it("Should return an empty array", () => {
        chai.expect(filter(empty, ({someProperty}) => someProperty)).to.deep.equal([])
    })
})