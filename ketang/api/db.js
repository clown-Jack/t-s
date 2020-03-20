let mongoose = require("mongoose");
let  {url}= require("./setting") 
let conn = mongoose.createConnection(url,{
    useUnifiedTopology: true,
    useNewUrlParser: true
});
let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:String,
    phone:String
})
let User = conn.model("User",UserSchema);
User.find({},(err,docs)=>{
    console.log(docs)
})
module.exports = {
    User
}