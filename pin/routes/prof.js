const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  likes: {
    type: Array,
    default: [],
  },
});

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;
