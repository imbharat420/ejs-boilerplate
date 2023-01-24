const {Router} = require("express");
const { UserCreate, UserPage } = require("../controllers/userController");
const fileUpload = require("../utils/fileUpload");
const router = Router()

router.get("/",UserPage)
router.post("/",fileUpload.single('file'),UserCreate)

module.exports = router; 