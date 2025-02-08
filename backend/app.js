const express = require("express");
const path = require("path");
const fs = require("fs");
const User = require("../model/user");
const router = express.Router();
const { upload } = require("../multer.js");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const cors=require("cors");

router.post("/", upload.single("file"), catchAsyncErrors(async (req, res, next) => {
    console.log("Creating user...");
    const { name, email, password } = req.body;


    const userEmail = await User.findOne({ email });
    if (userEmail) {
        if (req.file) {
            const filepath = path.join(__dirname, "uploads", req.file.filename);
            try {
                fs.unlinkSync(filepath);
            } catch (err) {
                console.log("Error removing file:", err);
                return res.status(500).json({ message: "Error removing file" });
            }
        }
        return next(new ErrorHandler("User already exists", 400));  // This now works correctly
    }


    let fileUrl = "";
    if (req.file) {
        fileUrl = path.join("./uploads", req.file.filename);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("At Create ", "Password: ", password, "Hash: ", hashedPassword);
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        avatar: {
            public_id: req.file?.filename || "",
            url: fileUrl,
        },
    });
    console.log(user);
    res.status(201).json({ success: true, user });
}));
module.exports = router;
app.js
const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const router = require("./controller/user.js");
const cors =  require("cors");
app.use(express.json());
app.use(cookieParser());
app.use(cors());
//app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use("/",express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});
// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "config/.env",
    });

};
app.use(bodyParser.json())
app.use(ErrorHandler);
app.use("/api/v2/user", router)
module.exports = app;
  
module.exports=app;module.exports=app;