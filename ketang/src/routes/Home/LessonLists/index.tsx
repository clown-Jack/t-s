import React, { Component, ReactNode } from 'react'
import { BarsOutlined } from '@ant-design/icons'
import { Lesson, Lessons } from '../../../store/reducers/home'
import './index.less'
import { Link } from 'react-router-dom';
import { Card, Button, Alert, Skeleton } from 'antd';
interface Props {
    children?: ReactNode,
    lessons: Lessons,
    getLessons: any,
    homeContainer:any
}
export default class LessonLists extends Component<Props> {
    componentDidMount() {
        if (this.props.lessons.list.length == 0) {
            this.props.getLessons();
        }
    }
    render() {
        //长列表渲染的核心:
        //要计算出起始渲染的元素的索引,之前的不渲染，只渲染起始+一页的数据 一页之后的数据也不渲染
        let start = 0;  //起始的索引
        let rem = parseInt(document.documentElement.style.fontSize);  //50
        //如果说current有值说明DOM元素已经挂载完成了
        if(this.props.homeContainer.current){
            let scrollTop = this.props.homeContainer.current.scrollTop;
            if(scrollTop-4.2*rem){
                start = Math.floor((scrollTop-4.2*rem)/(6.5*rem));
            }

        }
        return (
            <section className="lesson-list">
                <h2> <BarsOutlined /><span>全部课程</span></h2>
                <Skeleton loading={this.props.lessons.loading&&this.props.lessons.list.length==0} active paragraph={{rows:8}}>
                    {
                        this.props.lessons.list.map((lesson: Lesson, index: number) => (
                           index>=start&&index<5+start?<Link to={{pathname:`/detail/${lesson._id}`,state:lesson}} key={lesson._id}>
                                <Card
                                    hoverable={false}
                                    style={{ width: "100%" }}
                                    cover={<img src={lesson.poster} />}
                                >
                                    <Card.Meta title={lesson.title} description={(<span>价格:￥{lesson.price}元</span>)} />
                                </Card>
                            </Link>:<div key={index} style={{height:`${6.5*rem}px`}}></div>
                        ))
                    }
                </Skeleton>
                {
                    this.props.lessons.hasMore ? <Button onClick={() => this.props.getLessons()}
                        loading={this.props.lessons.loading}
                        type="dashed" style={{ width: "100%" }}>{
                            !this.props.lessons.loading && "加载更多"
                        }</Button> : <Alert type="warning" message="我是有底线的" style={{ textAlign: "center" }} />
                }
            </section>
        )
    }
}
