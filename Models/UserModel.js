import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "new User"
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  links: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Link"
  }

});

export default mongoose.model("Users", UserSchema);
