const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')
mongoose.connect("mongodb+srv://rag:143143@cluster0.ommypgy.mongodb.net/pinClone")
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,s
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  }],
  dp: {
    type: String, // You may adjust the type based on your needs (e.g., storing a file path or URL)
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
});
userSchema.plugin(plm)
const User = mongoose.model('User', userSchema);

module.exports = User;
