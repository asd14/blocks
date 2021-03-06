const { BaseError } = require("./base")

class InputError extends BaseError {
  constructor(message, details) {
    super(message, details)

    this.name = "InputError"
    this.statusCode = 409
  }
}

module.exports = { InputError }
