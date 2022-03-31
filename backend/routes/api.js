var express = require("express");
var router = express.Router();
var moment = require("moment");
const { connectDb, getDb } = require("../config/configdb");
var db;
connectDb(() => (db = getDb()));

/* GET users listing. */
router.get("/", function (req, res, ) {
  res.send("API");
});

router.post("/logusers", async (req, res, ) => {
  let emp_id = req.body.emp_id;
  let curdate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
  await db.collection("logusers").insertOne({
    emp_id: parseInt(emp_id),
    Curdate: curdate,
  });
  // console.log(abc);
  res.end();
});

// Register
router.post("/userslogin", async (req, res) => {
  //ดึงข้อมูล่าสุดมา
  const users = await db
    .collection("loginusers")
    .findOne({}, { sort: { Emp_id: -1 }, limit: 1 });
  const Emp_id = users.Emp_id + 1;
  // console.log(users.emp_id);

  // return 0; จะไม่ทำงานด้านล่าง
  // return 0;

  let logname = req.body.logname;
  let logemail = req.body.logemail;
  let number = req.body.number;
  let curdate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

  await db.collection("loginusers").insertOne({
    Logname: logname,
    Logemail: logemail,
    Number: number,
    Emp_id: Emp_id,
    Curdate: curdate,
  });
  res.redirect("http://localhost:8080/dashboard");
  res.end();
});

// if (logname === "" || logemail.lenght === "" || number.lenght === 0) {
// errors = true;
// แสดงแจ้งเตือน
// req.flash("error", "ป้อนข้อมูลให้ครบ");
// reload
// res.redirect("http://localhost:8080/");
// } else {

// แสดงแจ้งเตือน
// req.flash("success", "บันทึกเรียบร้อย");

// console.log(logname + logemail + number);
// });

//เช็ค LOGIN

router.get("/checklogin", async (req, res) => {
  const logusers = await db
  .collection("loginusers")
  .findOne({}, { sort: { Emp_id: -1 }, limit: 1 });
  res.json(logusers);
  res.end();
});

router.get("/userslogin", async (req, res) => {
  const users = await db.collection("loginusers").find({}).toArray();
  res.json(users);
  res.end();
});
router.get("/loginpart", async (req, res) => {
  const users = await db
    .collection("loginusers")
    .aggregate([
      {
        $lookup: {
          from: "users",
          localField: "emp_id",
          foreignField: "emp_id",
          as: "userslog",
        },
      },
      {
        $match: {
          id: { $ne: [] },
        },
      },
    ])
    .toArray();
  res.json(users);
  res.end();
});
module.exports = router;
