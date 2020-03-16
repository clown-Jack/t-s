import React from 'react'
import { connect } from 'react-redux'
import { TypeRootState } from '../../store/reducers'
import { TypeProfile } from '../../store/reducers/profile'
import {RouteComponentProps} from 'react-router'
import actions from '../../store/actions/profile'
import './index.less'
interface State{

}
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface IParams{}
type RouteProps = RouteComponentProps<IParams>;
type Props = StateProps&DispatchProps&RouteProps&{
    children?:any
}
class Profile extends React.Component<Props,State> {
    render() {
        return (
            <div>个人中心</div>
        )
    }
}
let mapStateToProps = (state: TypeRootState): TypeProfile => state.profile
export default connect(
    mapStateToProps,
    actions
)(Profile)