const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path")
const MongoStore = require("connect-mongo")(session);
const cors = require("cors")
let { url } = require("./setting");
let { User, Slider, Lesson } = require("./db");
let { md5 } = require('./utils');
let multer = require("multer");
let upload = multer({ dest: path.join(__dirname, "public") });
let app = express();
app.use(express.static(path.join(__dirname, "public")))
app.use(
    cors({
        origin: ["http://localhost:8080", "http://localhost:8081"],
        credentials: true, //是否允许跨域发cookie
        allowedHeaders: "Content-Type,x-requested-with",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
    })
)
app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
        res.sendStatus(200)  //OPTIONS 跨域  自定义头部的时候询问是否允许访问
    } else {
        next()
    }
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "songjie",
    store: new MongoStore({ url })
}))
app.use(function (req, res, next) {
    res.success = function (data) {
        res.json({ code: 0, data })
    }
    res.error = function (error) {
        res.json({ code: 1, error })
    }
    next();
})
/**
 * 获取课程详情
 */
app.get('/api/getLesson/:id', async (req, res) => {
    let lesson = await Lesson.findById(req.params.id);
    res.success(lesson)
})
/**
 * 获取课程
 */
app.get('/api/getLessons', async (req, res) => {
    let { category = "all", offset = 0, limit = 5 } = req.query;
    offset = parseInt(offset);
    limit = parseInt(limit);
    let query = {};
    if (category != 'all') {
        query['category'] = category
    }
    let list = await Lesson.find(query).sort({ order: 1 }).skip(offset).limit(limit);
    let total = await Lesson.count(query);
    let hasMore = total > (offset + list.length);
    setTimeout(()=>{
        res.success({ list, hasMore })
    },2000)
})
/**
 * 获取轮播图
 */
app.get('/api/getSliders', async (req, res) => {
    let sliders = await Slider.find();
    res.success(sliders)
})
/**
 * 上传头像
 */
app.post('/api/uploadAvatar', upload.single('avatar'), async (req, res, next) => {
    console.log(req.file)
    console.log(req.body)
    let avatar = `http://localhost:9000/${req.file.filename}`;
    await User.findByIdAndUpdate(req.body.userId, { avatar });
    if (req.session.user) {   //需要携带cookie
        req.session.user.avatar = avatar;
    }
    res.success(avatar)
})
/**
 * 验证用户是否登录
 */
app.get('/api/validate', async (req, res) => {
    if (req.session.user) {
        res.success(req.session.user)
    } else {
        res.error('此用户尚未登录')
    }
})
/**
 * 用户注册
 */
app.post('/api/register', async (req, res) => {
    let user = req.body;
    user.avatar = `https://secure.gravatar.com/avatar/${md5(user.email)}?s=48`
    let result = await User.create(user);
    res.success(result)
})
/**
 * 登录
 */
app.post('/api/login', async (req, res) => {
    let query = req.body;
    let user = await User.findOne(query);
    if (user) {
        req.session.user = user;
        res.success(user)
    } else {
        res.error("用户登录失败")
    }
})
/**
 * 退出
 */
app.get('/api/logout', async (req, res) => {
    req.session.user = null;
    res.success('退出登录成功')
})
app.listen(9000, () => {
    console.log("炸了呀")
})