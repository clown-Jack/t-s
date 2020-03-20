enum LOGIN_TYPES{  //枚举是类型也是值
    UN_VALIDATE,  // 未确定登录状态
    LOGINED,  //当前用户已经登录
    UNLOGIN   //当前用户确认过了，的确未登录
}

export default LOGIN_TYPES;