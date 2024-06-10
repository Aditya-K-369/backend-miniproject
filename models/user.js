const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/miniproject`);

const userSchema = mongoose.Schema({
    email:String,
    password:String,
    username:String,
    profilepic:{
        type:String,
        default:"default.png"
    },
    posts:[
        {type:mongoose.Schema.Types.ObjectId,
            ref:'post'
        }
    ]
});

module.exports = mongoose.model("user",userSchema);