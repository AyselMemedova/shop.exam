const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

const mehsulSchema = new Schema({
  title: {
    type: String,
  },

  desc: {
    type: String,
  },

  image: {
    type: String,
  },
  price: {
    type: Number,
  },
  count: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
});

app.get("/api/mehsullar", async (req, res) => {
  const resp = await Mehsullar.find();
  res.send(resp);
});

app.get("/api/mehsullar/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await Mehsullar.findById(id);
  res.send(resp);
});

app.delete("/api/mehsullar/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await Mehsullar.findByIdAndDelete(id);
  res.send(resp);
});

app.post("/api/mehsullar" ,async(req,res)=>{
    // const {title,desc,image,price,count,totalPrice}=req.body/
    const newMehsul= new Mehsullar({...req.body})
    await newMehsul.save()
    res.send("mehsul elave olundu")
})

app.put("/api/mehsullar/:id",async(req,res)=>{
    // const {title,desc,image,price,count,totalPrice}=req.body

    const {id}=req.params;
    const resp=await Mehsullar.findByIdAndUpdate(id,{...req.body});
    res.send(resp);
})

const Mehsullar = mongoose.model("Mehsullar", mehsulSchema);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then((res) => console.log("db connected"))
  .catch((error) => console.log("db not connected"));

app.listen(process.env.PORT, (req, res) => {
  console.log("running api 8080");
});
