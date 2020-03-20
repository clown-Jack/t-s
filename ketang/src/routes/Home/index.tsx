import React from 'react'
import { connect } from 'react-redux'
import { TypeRootState } from '../../store/reducers'
import { TypeHome } from '../../store/reducers/home'
import {RouteComponentProps} from 'react-router'
import actions from '../../store/actions/home'
import HomeHeader from './HomeHeader'
import './index.less'
interface State{

}
//当前组件有三个属性来源:1.mapStateToProps的返回值 2.actions对象类型 3.来自路由 4.用户自定义的其他属性的类型
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface IParams{}
type RouteProps = RouteComponentProps<IParams>;
type Props = StateProps&DispatchProps&RouteProps&{
    children?:any
}
class Home extends React.Component<Props,State> {
    render() {
        console.log(this.props);
        return (
            <div>
                <HomeHeader 
                setCurrentCategory = {this.props.setCurrentCategory}
                currentCategory={this.props.currentCategory}/>
                首页
            </div>
        )
    }
}
let mapStateToProps = (state: TypeRootState): TypeHome => state.home
export default connect(
    mapStateToProps,
    actions
)(Home)