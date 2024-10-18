import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    company: String,
    password: {
      type: String,
      required: true,
      min: 5,
    },
    workspace_id:{type :Number,
    required: true,
    unique: true,
    } ,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
