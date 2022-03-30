var express = require("express");
var router = express.Router();
var moment = require("moment");
const { connectDb, getDb } = require("../config/configdb");
var db;
connectDb(() => (db = getDb()));

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("API");
});

router.post("/login", async (req, res, next) => {
  let abc = req.body.abc;
  let curdate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
  await db.collection("loginusers").insertOne({
    abc: parseInt(abc),
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
    .findOne({}, { sort: { emp_id: -1 }, limit: 1 });
  const emp_id = users.emp_id + 1;
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
    Emp_id: emp_id,
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
