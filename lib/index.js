"use strict";

const qs = require("querystring")
    , request = require("tinyreq")
    , Err = require("err")

/**
 * payiota
 * A Node.js wrapper around the Payiota.me API.
 *
 * @name payiota
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */

class Payiota {
    constructor (key) {
        this.api_key = key
        this.host = "https://payiota.me/api.php"
    }
    _url (query) {
        return `${this.host}?${qs.stringify(query)}`
    }

    _req (query) {
        return request({
            method: "POST"
          , url: this._url(query)
        }).then(res => {
            if (!res) {
                // TODO ???
            }
            try {
                res = JSON.parse(res)
                return res
            } catch (e) {
                const maybeInt = +res
                if (Number.isSafeInteger(maybeInt)) {
                    return maybeInt
                }
            }

            // If it's none of the above, we assume it's an error
            throw new Err(res, { code: res })
        })
    }

    /**
     * buy
     * Creates an invoice (address/price pair).
     *
     * @name buy
     * @function
     * @param {Object} options An object containing the following fields:
     *
     *   - `price` (Number): The price in usd
     *   - `custom` (String): A custom string metadata about the transaction.
     *   - `action` (String): The transaction action. Use `update` for invoices for a later date.
     *   - `address` (String): The address of saved invoice.
     *
     * @returns {Promise} A promise resolving with the reponse from Payiota.me.
     */
    buy (options = {}) {
        options = Object.assign({
            action: options.address ? "update" : "new"
        })
        return this._req(options)
    }
}

module.exports = Payiota
