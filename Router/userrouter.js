const express = require("express");
const router = express.Router();
const usercontroller = require('../Controllers/usercontroller.js')

router.post("/",usercontroller.postData);
router.get("/",usercontroller.getAllData);
// router.get("/:id",usercontroller.getDataById);
router.get("/:username",usercontroller.getDataByUserName);
router.delete("/:id",usercontroller.deleteDataById);
router.patch("/:id",usercontroller.updateUser);



module.exports = router;