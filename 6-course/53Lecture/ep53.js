require("./appMongoose");
const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user-router")
const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRoute);

app.listen(8080,()=>{
  console.log("Library App Backend is running in Port 8080");
});

const {connect} = require("mongoose");
const MONGO_DB_URL = "mongodb+srv://root:roota@tutoraccluster.udjbnbd.mongodb.net";

const DB_NAME = "cs-library-app";

const connectDb = async ()=>{
  try{
    await connect("${MONGO_DB_URL}/${DB_NAME}");
    console.log("MongoDB Connection is successful.");
  }catch(err){
    console.error(err);
  }
};

connectDb();

const express = require("express");
const router = express.Router();

module.exports = router;

module.exports = {};

const {model, Schema} = require("mongoose");
const {isEmail} = require("validator");
const {encryptPassword, checkPassword} = require("../bcrypt");

const UserSchema = new Schema({
  firstName: {type: String, trime: true, required: true},
  lastName: {type: String, trim: true, required: true},
  email: {type: String, lowercase: true, trim: true, required: true, unique: true},
  validate: {validator(email){
  return isEmail(email);
  },},
  password: {type: String, required: true, trim: true, minlength: 8, validate: {validator(pass){
    if (pass.includes(" ") || pass.includes("\n") || pass.includes("\t")){
        throw new Error("Password must not contain space/tab/newline character.");
    }
    if(pass.toLowerCase().includes("password")){
      throw new Error("Password must not contain "password" ");
    }
    return true;
  },},},
  type: {type: String, enum: ["STUDENT", "LIBRARIAN"], default: "STUDENT"},
  tokens:{type: [{token: String}],}
},{timestamps: true});

UserSchema.pre("save", async function(next)){
  const user = this;
  if(user.modifiedPaths().includes("password")){
    user.password = await encryptPassword(user.password);
  }
  next();
}

class InputValidationException extends Error {
  constructor(message){
    super(message);
  }
}

module.exports = InputValidationException

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

router.post("/signup", userController.addNewUser);

module.exports = router;