import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Contain, Image, LoginArea, Header, Input, Button} from './style'
import logo from '../../static/img/logo2.png'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
        this.getInputValue = this.getInputValue.bind(this)
        this.submit = this.submit.bind(this)
    }
    getInputValue(e) {
        let event = e.target
        if(event.id === 'name') {
            this.setState({
                name: event.value
            })
        }else{
            this.setState({
                password: event.value
            })
        }
    }
    submit() {
        let name = this.state.name
        let password = this.state.password
        if(name === '' || password === ''){
            window.alert('用户名或密码不能为空')
        }else{
            let test = /^[a-zA-z]+$/g
            if(test.test(name)){
                let date = Date.parse(new Date())
                window.sessionStorage.setItem('token', name+date)
                this.props.history.push('/')
            }
            else{
                window.alert('用户名只能是英文')
            }
        }
    }
    render() {
        return (
            <Contain>
                <Link to="/">
                    <Image>
                        <img alt="这是一个logo" src = {logo}></img>
                    </Image>
                </Link>
                <LoginArea>
                    <Header>
                        <Link to="/login">
                            <span >登录</span>
                        </Link>
                        <b>·</b>
                        <span className = "login">注册</span>
                    </Header>
                    <div className="info">
                        <Input placeholder="你的昵称" onChange = {this.getInputValue} id="name" ></Input>
                        <Input placeholder="密码" type="password" onChange = {this.getInputValue} id="password"></Input>
                        <span className="iconfont first">&#xe60f;</span>
                        <span className="iconfont">&#xe625;</span>
                    </div>
                    <Button onClick = {this.submit}>注册</Button>
                </LoginArea>
            </Contain>
        ) 
    }
}
export default Register