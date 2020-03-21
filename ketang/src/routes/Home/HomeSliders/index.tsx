import React, { Component, ReactNode } from 'react'
import { Slider } from '../../../store/reducers/home';
import { Carousel } from 'antd'
import './index.less'
interface Props {
    children?: ReactNode,
    sliders: Array<Slider>,
    getSliders: any
}
export default class HomeSliders extends Component<Props> {
    componentDidMount() {
        console.log(this);
        if (this.props.sliders.length == 0) {
            this.props.getSliders()
        }
    }
    render() {
        return (
            <Carousel autoplay>
                {
                    this.props.sliders.map((item:Slider,index:number)=>(
                        <div key={index}>
                            <img src={item.url}/>
                        </div>
                    ))
                }
            </Carousel>
        )
    }
}
