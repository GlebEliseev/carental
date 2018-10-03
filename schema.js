LenderSchema = {
    firstName: {
      type: String,
      maxlength: 15,
      trim: true,
      required: true
    },
    lastName: {
      type: String,
      maxlength: 35,
      trim: true,
      required: true
    },
    credentials: {
      type: [
        {
          phone: {
            type: String,
            match: /(\+356)\s?(99|79|77)[0-9]{2}\s?[0-9]{4}/i,
            trim: true,
            required: true
          },
          activationCode: {
            type: String,
            trim: true
          },
          role: {
            type: String,
            enum: ['admin', 'user']
          }
        },
        {
          id: false,
          _id: false,
          emitIndexErrors: true,
          timestamps: false,
          retainKeyOrder: true,
          versionKey: false
        }
      ]
    },
    phone: {
      type: String,
      match: /(\+356)\s?(99|79|77|21|27)[0-9]{2}\s?[0-9]{4}/i,
      trim: true,
      required: true
    },
    paymentDetails: PaymentDetails
  },
  cars: {
    type: [Car]
  }
}

Car = {
  manufacturer: {
    type: String,
    maxlength: 35,
    trim: true,
    required: true
  },
  model: {
    type: String,
    maxlength: 35,
    trim: true,
    required: true
  },
  location: {
    type: [Number],
    index: '2dsphere',
    required: true
  },
  //TODO: RegExp for Russian number plates
  numberPlate: {
    type: String,
    match: /^/i,
    required: true
  }
}

RenterSchema = {
  //TODO: RegExp for Russian phone number
  phone: {
    type: String,
    match: /^/i,
    trim: true,
    unique: true,
    required: true
  },
  firstName: {
    type: String,
    maxlength: 15,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    maxlength: 35,
    trim: true,
    required: true
  },
  location: {
    type: [Number],
    index: '2dsphere',
    required: true
  }
}
