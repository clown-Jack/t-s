import React, { Component } from 'react'
import actions from '../../store/actions/detail'
import { connect } from 'react-redux'
import { TypeRootState } from '../../store/reducers'
import { RouteComponentProps } from 'react-router'
import NavHeader from '../../components/NavHeader'
import { Card } from 'antd'
import { getLesson } from '../../api/detail'
import { Lesson } from '../../store/reducers/home'
interface State {
    lesson: Lesson
}
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface IParams {
    id: string
}
type RouteProps = RouteComponentProps<IParams>;
type Props = StateProps & DispatchProps & RouteProps & {
    children?: any
}
class Detail extends Component<Props, State> {
    state: any = { lesson: {} }
    async componentDidMount() {
        let lesson = this.props.location.state;
        if (!lesson) {
            let id = this.props.match.params.id;
            let result: any = await getLesson(id);
            if (result.code == 0) {
                this.setState({ lesson: result.data })
            }
        }else{
            this.setState({ lesson })
        }
    }
    render() {
        let { lesson } = this.state;
        return (
            <div>
                <NavHeader history={this.props.history}>课程详情</NavHeader>
                <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<video src={lesson.video} controls autoPlay={false} />}
                >
                    <Card.Meta title={lesson.title} description={<span>价格:￥{lesson.price}元</span>}></Card.Meta>
                </Card>
            </div>
        )
    }
}
let mapStateToProps = (state: TypeRootState) => state.mine
export default connect(
    mapStateToProps,
    actions
)(Detail)
