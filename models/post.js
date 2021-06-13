var mongoose = require("mongoose");


var postSchema = mongoose.Schema({
    title: {type: String, required:true},
    content: {type:String, required:true},
    createdAt: {type:Date, default:Date.now},
    userID:{type:mongoose.Schema.Types.ObjectId, required:false, unique:false},
    name:{type:String, required:false},
    public:{type:Boolean, default:false, required:false,unique:false}
});

var Post = mongoose.model("Post", postSchema);

module.exports = Post;