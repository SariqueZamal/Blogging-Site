const mongoose = require('mongoose');


const programSchema = new mongoose.Schema( {
    
    fname:{
      type: String,
      required: true

    },
    lname:{
        type: String,
        required: true
  
      },

    title:{
       type: String,
       required: true,
       enum: ['Mr', 'Mrs', 'Miss']

    },
    email:{

        type: String,
        required: [true, "Email required"],
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
    },
    password: {
        type:String,
        required: [true, "password required"]},
     } ,{timestamps: true });

module.exports = mongoose.model('Author1', programSchema)
