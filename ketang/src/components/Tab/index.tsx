import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { HomeOutlined ,SolutionOutlined, UserOutlined} from '@ant-design/icons';
import './index.less'
export default class Tabs extends Component {
    render() {
        return (
            <footer>
                <NavLink to="/" exact><HomeOutlined /><span>首页</span></NavLink>
                <NavLink to="/mine"><SolutionOutlined /><span>我的课程</span></NavLink>
                <NavLink to="/profile"><UserOutlined /><span>个人中心</span></NavLink>
            </footer>
        )
    }
}
