import React from 'react'
import { connect } from 'react-redux'
import { TypeRootState } from '../../store/reducers'
import { TypeProfile } from '../../store/reducers/profile'
import { RouteComponentProps } from 'react-router'
import actions from '../../store/actions/profile'
import NavHeader from '../../components/NavHeader'
import LOGIN_TYPES from '../../typings/login-types'
import { Descriptions, Button, Alert, Upload, message } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './index.less'
interface State {

}
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface IParams { }
type RouteProps = RouteComponentProps<IParams>;
type Props = StateProps & DispatchProps & RouteProps & {
    children?: any
}
class Profile extends React.Component<Props, State> {
    state = { loading: false, imageUrl: '' }
    async componentDidMount() {  //组件挂载完成
        //向服务器发请求 询问服务器当前用户的登录状态
        await this.props.validate();
    }
    handleQuite = async () => {
        await this.props.logout();
        this.props.history.push("/login")
    }
    handleChange = (info: any) => {
        if (info.file.status == 'uploading') {
            this.setState({ loading: true })
        } else if (info.file.status == 'done') {
            let { code, data, error } = info.file.response;  //获取接口响应体
            if (code == 0) {
                this.setState({
                    loading: false,
                    imageUrl: data
                }, () => this.props.changeAvatar(data))
            } else {
                message.error(error)
            }
        }
    }
    render() {
        let { user } = this.props;
        let content; //content 存放着要渲染的内容
        if (/**如果说当前用户尚未验证权限 */this.props.loginState === LOGIN_TYPES.UN_VALIDATE) {
            content = null
        } else if (/**如果说当前用户已经登录 */this.props.loginState === LOGIN_TYPES.LOGINED) {
            let imageUrl = this.state.imageUrl || user.avatar;
            content = (
                <div className="user-info">
                    <Descriptions title="当前登录用户">
                        <Descriptions.Item label="头像">
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                withCredentials={true}
                                action="http://localhost:9000/api/uploadAvatar"
                                beforeUpload={beforeUpload}
                                data={{ userId: user._id }}
                                onChange={this.handleChange}
                            >
                                {this.state.loading ? <LoadingOutlined /> : <img src={imageUrl} style={{ width: "100%" }} />}
                            </Upload>
                        </Descriptions.Item>
                        <Descriptions.Item label="用户名">{this.props.user.username}</Descriptions.Item>
                        <Descriptions.Item label="手机号">{this.props.user.phone}</Descriptions.Item>
                        <Descriptions.Item label="邮箱">{this.props.user.email}</Descriptions.Item>
                    </Descriptions>
                    <Button type="danger" onClick={this.handleQuite}>退出登录</Button>
                </div>
            )
        } else/**如果说当前用户未登录*/ {
            content = (
                <>
                    <Alert type="warning" message="当前未登录" description="亲爱的用户 你好,你当前尚未登录，请你选择注册或者登录" />
                    <div style={{ textAlign: "center", padding: '.5rem' }}>
                        <Button type="dashed" onClick={() => this.props.history.push("/login")}>登录</Button>
                        <Button type="dashed" style={{ marginLeft: '.5rem' }} onClick={() => this.props.history.push("/register")}>注册</Button>
                    </div>
                </>
            )
        }
        return (
            <section>
                <NavHeader history={this.props.history}>个人中心</NavHeader>
                {content}
            </section>
        )
    }
}
let mapStateToProps = (state: TypeRootState): TypeProfile => state.profile
export default connect(
    mapStateToProps,
    actions
)(Profile)

function beforeUpload(file: any): any {
    console.log(file);
    let isJpnOrPng = file.type ==="image/jpg"||file.type=="image/png"
    if(!isJpnOrPng)  message.error("只能上传PNG或者JPN格式的图片!")
    const isLessThan2M = file.size/1024/1024 <2;
    if(!isLessThan2M)  message.error("图片大小不能大于2M!");
    return isJpnOrPng&&isLessThan2M
}