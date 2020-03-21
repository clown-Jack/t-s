let mongoose = require("mongoose");
let  {url}= require("./setting") 
let conn = mongoose.createConnection(url,{
    useUnifiedTopology: true,
    useNewUrlParser: true
});
/**
 * 用户集合
 */
let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:String,
    phone:String
})
let User = conn.model("User",UserSchema);
/**
 * 轮播图集合
 */
let SliderSchema = new mongoose.Schema({
    url:String
})
let Slider = conn.model("Slider",SliderSchema);

/**
 * 课程集合
 */
let LessonSchema = new mongoose.Schema({
    order:Number, //顺序
    title:String,  //标题
    video:String,  //视频
    poster:String, //海报
    url:String,  //url地址
    price:Number,  //价格
    category:String  //分类
})
let Lesson = conn.model("Lesson",LessonSchema)
module.exports = {
    User,
    Slider,
    Lesson
}