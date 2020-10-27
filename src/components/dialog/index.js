import React,{Component, Fragment} from 'react'
import {Toast, Content, Close} from './style'
import jianshu from '../../static/img/jianshu.png'
import {connect} from 'react-redux'
import {getToastAction} from '../../store/ActionCreators'
class Dialog extends Component {
    render() {
        const {changeIsShow} = this.props
        return (
            <Fragment>
                <Toast>
                    <Content>
                        <h4>简书钻相关功能，目前仅能在<span>简书App</span>查看</h4>
                        <div className="picture">
                            <img src={jianshu} alt="这是简书的二维码"/>
                        </div>
                        <p>扫码下载简书App</p>
                        <Close onClick={changeIsShow} >我知道了</Close>
                    </Content>
                </Toast>
            </Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeIsShow() {
            dispatch(getToastAction())
        }
    }
}
export default connect(null, mapDispatchToProps)(Dialog)
