const mongoose = require("mongoose");

const zips = new mongoose.Schema({
    city: {
      type: String,
      required: true
    },
    zip:{
      type:String,
      required:true
    },
    loc:{
      type:Object,
      required:false
    },
    pop:{
      type:Number,
      required:true
    },
    state:{
      type:String,
      required:true
    }
    
  })
module.exports = mongoose.model("zips", zips);
