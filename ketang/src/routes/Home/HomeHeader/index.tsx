import React, { Component } from 'react'
import { UnorderedListOutlined } from '@ant-design/icons';
import './index.less'
export default class HomeHeader extends Component {
    setCurrentCategory=(evnet:any)=>{

    }
    render() {
        return (
            <div className="home-header">
                <div className="header-logo">
                    <img src="http://www.zhufengpeixun.cn/skin/20142/img/logoMobile.png"/>
                    <UnorderedListOutlined />
                </div>
                <ul onClick={this.setCurrentCategory} className="header-category">
                    <li data-type="all">全部</li>
                    <li data-type="react">React</li>
                    <li data-type="vue">Vue</li>
                </ul>
            </div>
        )
    }
}
