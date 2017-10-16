## Documentation

You can see below the API reference of this module.

### `payiota(a, b)`
A Node.js wrapper around the Payiota.me API.

#### Params

- **Number** `a`: Param descrpition.
- **Number** `b`: Param descrpition.

#### Return
- **Number** Return description.

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

