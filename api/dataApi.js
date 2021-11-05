const express = require("express");
const router = express.Router();
const Zips = require("./dataSchema");

router.get("/", async (req, res) => {
  try {
    await data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/addData", function (req, res) {
  const zips = new Zips({
    city: "test2",
    zip: "12312",
    loc: "",
    pop: 1111,
    state: "AL",
  });

  zips.save()
  .then((result)=>res.send(result))
  .catch(err=>console.log("add data error :" + err))
});


router.get("/getAllData",(req,res)=>{
  Zips.find()
  .then((result)=>res.json(result))
})

module.exports = router;
