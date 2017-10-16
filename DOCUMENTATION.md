## Documentation

You can see below the API reference of this module.

### `Payiota(key)`
A Node.js wrapper around the Payiota.me API.

#### Params

- **String** `key`: The Payiota API key.

### `buy(options)`
Creates an invoice (address/price pair).

#### Params

- **Object** `options`: An object containing the following fields:
  - `price` (Number): The price in usd
  - `custom` (String): A custom string metadata about the transaction.
  - `action` (String): The transaction action. Use `update` for invoices for a later date.
  - `address` (String): The address of saved invoice.

#### Return
- **Promise** A promise resolving with the reponse from Payiota.me.

