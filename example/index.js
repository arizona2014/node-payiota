"use strict";

const PayiotaAPI = require("../lib");

const payiota = new PayiotaAPI("your api key")

const verificationKey = "Verification_from_payiota"; 

// Create an invoice
payiota.buy({
    // You will have to take care
    // of encrypting this on your side
    // if you are concerned about security
	
    // Buy $42
    price: 42,	
    custom: "some metadata",


}).then(res => {
    console.log("transaction created", res)
}).catch(err => {
    console.error(err)
})

// Update
payiota.buy({
    verification: verificationKey,
    address: "the address"
}).then(res => {
    console.log("new price of in IOTA's ", res)
}).catch(err => {
    console.error(err)
})
