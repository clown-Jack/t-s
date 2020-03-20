import React, { Component } from 'react'
import {LeftOutlined } from '@ant-design/icons'
import './index.less';
interface Props{
    history:any
}
export default class NaHeader extends Component<Props>{
    render() {
        return (
            <div className="nav-header">
                <LeftOutlined onClick={()=>this.props.history.goBack()}/>
                {this.props.children}
            </div>
        )
    }
}
