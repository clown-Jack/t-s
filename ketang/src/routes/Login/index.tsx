import React, { Component } from 'react'
import { connect } from 'react-redux';
import actions from '../../store/actions/profile'
import { TypeRootState } from '../../store/reducers'
import { TypeProfile } from '../../store/reducers/profile'
import NavHeader from '../../components/NavHeader'
import { RouteComponentProps, Link } from 'react-router-dom'
import {TypeAnyObject} from '../../typings/comm'
import './index.less'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined ,PhoneOutlined} from '@ant-design/icons'
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface IParams { }
type RouteProps = RouteComponentProps<IParams>;
type Props = StateProps & DispatchProps & RouteProps & {
    children?: any
}
class Login extends Component<Props>{
    handleSubmit=(values:TypeAnyObject)=>{
       this.props.login(values)
    }
    failedSubmit=(errorInfo:any)=>{
        console.log(errorInfo);
    }
    render() {
        return (
            <>
                <NavHeader history={this.props.history}>注册</NavHeader>
                <Form onFinish={this.handleSubmit} onFinishFailed={this.failedSubmit}>
                    <Form.Item name="username"
                        rules={[{ required: true, message: '用户名必输' },
                        { max: 8, message: "用户名必须小于8位" },
                        { min: 6, message: "用户名必须大于6位" }]}
                    >
                        <Input prefix={<UserOutlined />} style={{ color: "rgba(0,0,0,.25)" }} type="text" placeholder="请输入用户名" />
                    </Form.Item>
                    <Form.Item name="password"
                        rules={[{ required: true, message: '密码必须输入' },
                        { max: 8, message: "密码必须小于8位" },
                        { min: 6, message: "密码必须大于6位" }]}
                    >
                        <Input prefix={<LockOutlined />} style={{ color: "rgba(0,0,0,.25)" }} type="password" placeholder="请输入密码" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        <span>或者</span><Link to="/register">立即注册</Link>
                    </Form.Item>
                </Form>
            </>
        )
    }
}
let mapStateToProps = (state: TypeRootState): TypeProfile => state.profile
export default connect(
    mapStateToProps,
    actions
)(Login)
