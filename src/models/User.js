import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, nuique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  password2: { type: String, required: true },
  name: { type: String, required: true },
  contry: String,
});

const User = mongoose.model("User", UserSchema);
export default User;
