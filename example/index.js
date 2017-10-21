"use strict";

const PayiotaAPI = require("../lib");

const payiota = new PayiotaAPI("your api key")

const verificationKey = "Verification_from_payiota"; 

// Create an invoice
payiota.buy({
    // You will have to take care
    // of encrypting this on your side
    // if you are concerned about security
    custom: "some metadata",

    // Buy $42
    price: 42,
}).then(res => {
    console.log("transaction created", res)
}).catch(err => {
    console.error(err)
})

// Create an invoice for a later date
payiota.buy({
    custom: "some metadata",
    price: 42,
    address: "the address"
}).then(res => {
    console.log("transaction created", res)
}).catch(err => {
    console.error(err)
})
