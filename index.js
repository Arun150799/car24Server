const express = require("express");
const cors = require("cors");
const mongoose = require("./config/mongoose");
const Product = require("./models/Product");


const app = express();
app.use(express.json())
app.use(cors())


app.get("/products", async (req, resp) => {
  try {
    const { modalName,brand,carCatogaries2,carCatogaries3,rto,carCatogaries4,transmissionImg} = req.query;
    let filter = {};

    if (modalName) {  
      filter.ModalName = modalName;
    }
    if (brand) {
      filter.Brand = brand;
    }
    if(carCatogaries2){
      filter.CarCatogaries2=carCatogaries2
    }

    if(carCatogaries3){
      filter.CarCatogaries3=carCatogaries3
    }
    
    if(rto){
      filter.RTO=rto
    }
    if(carCatogaries4){
      filter.CarCatogaries4=carCatogaries4
    }
    if(transmissionImg){
      filter.TransmissionImg=transmissionImg
    }

    const products = await Product.find(filter);

    if (products.length > 0) {
      resp.send(products);
    } else {
      resp.send({ result: "no product found" });
    }
  } catch (error) {
    console.error("something went wrong with this :", error);
    resp.status(500).send("Oops, something went wrong");
  }
});  

app.get("/search/:key",async(req,resp)=>{
  let result =await Product.find({ 
    "$or":[
      {
        CarCatogaries4:{ $regex: req.params.key},
    },
    {
      Brand:{ $regex: req.params.key},
  },
  {
    ModalName:{ $regex: req.params.key},
}
  ]
  })
  resp.send(result);
});


const port = 5800;
app.listen(port,()=>{
    console.log("Your server is running on port", port);
})