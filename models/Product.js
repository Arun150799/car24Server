const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  { 
    CarImageURL:String,
    Brand:String,
    ModalYear: String,
    ModalName: String,
    FluidType:String,
    Transmission:String,
    CarCatogaries1: String,
    CarCatogaries2: String,
    CarCatogaries3: String,
    CarCatogaries4: String,
    EMI: String,
    Price: String,
    RTO:String,
  },
);



module.exports = mongoose.model('Product', jobSchema);
