const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const db = require("./config/db.js");
const PORT = process.env.PORT || 3500;

app.get("/", (req, res) => {
  console.log("root");
});

app.get("/cars", (req, res) => {
  console.log("cars");
  db.query(`select * from cars`, (err, data) => {
    if (!err) {
      console.log(data)
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

app.get("/cars/:model", (req, res) => {
  const model = req.params.model;
  db.query(`select * from cars where model = "${model}"`, (err, data) => {
    if (!err) {
      console.log(data)
      res.send(data)
    } 
    else {
      console.log(err)
    }
  });
});

app.post('/cars',(req,res) => {
  const model = req.body.model
  const provider = req.body.provider
  const price = req.body.price
  db.query(`insert into cars values ('${model}', '${provider}', ${price})`,(err,data) => {
    if(!err){
      console.log('입력 완료!')
      res.send(data)
    }
    else{
      console.log(err)
    }
  })
})

app.put('/cars',(req,res) => {
  const model = req.body.model
  const price = req.body.price
  db.query(`update cars set price=${price} where model = '${model}'`,(err,data) => {
    if(!err){
      console.log('수정 완료')
      res.send(data)
    }
    else{
      console.log(err)
    }
  })
})

app.delete('/cars',(req,res) => {
  console.log(req.body)
  const model = req.body.model
  db.query(`delete from cars where model = '${model}'`,(err,data) => {
    if(!err){
      console.log('삭제 완료!')
      res.send(data)
    }
    else{
      console.log(err)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server On http://localhost"${PORT}`);
});
