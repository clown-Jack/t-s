import React, { Component } from 'react'
import { UnorderedListOutlined } from '@ant-design/icons';
import { Transition } from 'react-transition-group';
// import logo from "../../../assets/img/logo.png";
import './index.less'

const duration = 3000;

const defaultStyle = {
    opacity: 0,
    display: "none",
    transition: `all ${duration}ms ease-in-out`
}
interface TypeTransitionStyle {
    entering: React.CSSProperties,
    entered: React.CSSProperties,
    exiting: React.CSSProperties,
    exited: React.CSSProperties,
    unmounted:React.CSSProperties
}
const transitionStyle: TypeTransitionStyle = {
    entering: { opacity: 1, display: 'block' },
    entered: { opacity: 1, display: 'block' },
    exiting: { opacity: 0, display: 'none' },
    exited: { opacity: 0, display: 'none' },
    unmounted:{ opacity: 0, display: 'none' }
}
interface State {
    in: boolean
}
interface Props {
    currentCategory:string,
    setCurrentCategory:any
}
export default class HomeHeader extends Component<Props, State> {
    state = {
        in: false
    }
    setCurrentCategory = (event:React.MouseEvent<HTMLUListElement>) => {
         let target:EventTarget = event.target;
         let type = (target as HTMLUListElement).dataset.type;
         this.setState({in:false},()=>this.props.setCurrentCategory(type));     
    }
    render() {
        return (
            <div className="home-header">
                <div className="header-logo">
                {/* "http://www.zhufengpeixun.cn/skin/20142/img/logoMobile.png" */}
                    {/* <img src={logo}/> */}
                    <img src="http://www.zhufengpeixun.cn/skin/20142/img/logoMobile.png" />
                    <UnorderedListOutlined onClick={() => this.setState({ in: !this.state.in })} />
                </div>
                <Transition timeout={duration} in={this.state.in}>
                    {
                       state=>(
                            <ul style={{
                                   ...defaultStyle,
                                   ...transitionStyle[state]}}
                                onClick={this.setCurrentCategory} 
                                className="header-category">
                                <li data-type="all" className={this.props.currentCategory == 'all'?"active":''}>全部</li>
                                <li data-type="react" className={this.props.currentCategory == 'react'?"active":''}>React</li>
                                <li data-type="vue" className={this.props.currentCategory == 'vue'?"active":''}>Vue</li>
                            </ul>
                          )
                    }
                </Transition>
            </div>
        )
    }
}
