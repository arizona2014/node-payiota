"use strict";

const PayiotaAPI = require("../lib");

const payiota = new PayiotaAPI("123")
payiota.buy({
    // You will have to take care
    // of encrypting this on your side
    // if you are concerned about security
    custom: "some metadata",
    price: 0,
    address: 123
}).then(res => {
    console.log("transaction created", res)
}).catch(err => {
    console.error(err)
})
