import React, {Component, Fragment} from 'react'
import {Nav, Head, Logo, Contain, Aa, Write, Signup, Signin, Beta, InputSearch, Search, Magnify, Dark,SearchModel, ListItem,HotSearch} from './style'
// import {Iconfont} from '../../static/iconfont/style'
import {Link} from 'react-router-dom'
import beta from '../../static/img/beta.png'
import {connect} from 'react-redux'
import {setToastAction, inputTrueAction, inputFalseAction, trueDarkAction, falseDarkAction, changeDarkModel, getSearchList,setMouseTrueAction,setMouseFalseAction
,changePageAction, changeBackAction, setTokenAction} from '../../store/ActionCreators'
import './index.css'

class Header extends Component {
    constructor(props) {
        super(props)
        this.isShowDarkModel = this.isShowDarkModel.bind(this)
        this.isShowSearch = this.isShowSearch.bind(this)
        this.listenScroll = this.listenScroll.bind(this)
        this.isSignIn = this.isSignIn.bind(this)
        this.exitJianShu = this.exitJianShu.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenScroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenScroll)
    }
    listenScroll() {
        let {isShowBack, changeBackTop} = this.props
        if(window.scrollY > 400) {
            if(isShowBack) return
            else{
                changeBackTop()
            }
        }else{
            if(isShowBack){
                changeBackTop()
            }
            else return 
        }
    }
    exitJianShu() {
        window.sessionStorage.clear()
        this.props.clearToken()
    }
    isSignIn() {
        let token = this.props.token
        if(token){
            return (
                <Fragment>
                    <Signup>{token}</Signup>
                    <Signin onClick = {this.exitJianShu}>退出</Signin>
                </Fragment>
            )
        }else{
            return (
                <Fragment>
                    <Link to="/register">
                        <Signup>注册</Signup>
                    </Link>
                    <Link to="/login">
                        <Signin>登录</Signin>
                    </Link>
                </Fragment>
            )
        }
    }
    render() {
        const {setToastTrue, isFocus, setInputFocus, setInputBlur, isDark, showDarkModel, searchList, darkTheme} = this.props
        return (
            <Fragment>
                {/* <Iconfont></Iconfont> */}
                <Nav className = {isDark? 'evening' : ''}>
                    <Head>
                        <Link to="/">
                            <Logo></Logo>
                        </Link>
                        {/* 搜索区块 */}
                        <Write>
                            <Link to={this.props.token? '/write' : '/login'}>
                                <span className="iconfont">&#xe615;写文章</span>
                            </Link>
                        </Write>
                        {this.isSignIn()}
                        <Beta onClick = {setToastTrue}>
                            <img alt="这是一个beta" src={beta}/>
                        </Beta>
                        <Aa onClick = {showDarkModel}>
                            <span className="iconfont aa">&#xe636;</span>
                            { this.isShowDarkModel() }
                        </Aa>
                        <Contain>
                            <Link to="/">
                                <div className={this.props.isHome? 'nav-item page active' : 'nav-item page'}><span className={(!this.props.isHome && this.props.darkTheme)? 'evening iconfont': 'iconfont'}>&#xe60d;</span><span className={(!this.props.isHome && this.props.darkTheme)? 'evening': ''}>首页</span></div>
                            </Link>
                            <a className={darkTheme? 'nav-item download evening': 'nav-item download'} href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=navbar-apps" target="_blank" rel="noopener noreferrer"><span className="iconfont" >&#xe608;</span>下载APP</a>
                            <InputSearch>
                                <Search placeholder="搜索" className = {isFocus? 'focus' : ''} onFocus = {() => {setInputFocus(searchList)}} onBlur = {setInputBlur}></Search>
                                <Magnify className = {isFocus? 'focus iconfont' : 'iconfont'}>&#xe60c;</Magnify>
                                {this.isShowSearch()}
                            </InputSearch>
                        </Contain>
                    </Head>
                </Nav>
            </Fragment>
        )
    }
    isShowSearch() {
        if(this.props.isFocus || this.props.mouseOver) {
            const list = this.props.searchList.toJS()
            let page = this.props.page
            let newList = list.slice((page-1)*10,page*10)
            return (
                <SearchModel onMouseEnter = {this.props.mouseOverTrue} onMouseLeave = {this.props.mouseOverFalse} className={this.props.darkTheme? 'evening': ''}>
                    <HotSearch>
                        <span className = "search-left">热门搜索</span>
                        <span className = "search-right" onClick = {() => {this.props.changePage(this.props.page, this.circle)}}><span className="iconfont rotate" ref = {(span) => {this.circle = span}}>&#xe62b;</span>换一换</span>
                    </HotSearch>
                    <ul>
                        {newList.map((item,index) => {
                            return (
                                <ListItem key={index}>{item}</ListItem>
                            )
                        })}
                    </ul>
                </SearchModel>
            )
        }else{
            return null
        }
    }
    isShowDarkModel() {
        if(this.props.darkModel) {
            return (
                <Dark className = {this.props.isDark? 'evening' : ''} id="model">
                <div className="dark">夜间模式</div>
                <div className="dark">
                    <span className= {this.props.isDark ? 'active' : ''} onClick = {this.props.setDarkTrue}>开</span>
                    <span className = {this.props.isDark ? '' : 'active'} onClick={this.props.setDarkFalse}>关</span>
                </div>
                </Dark>
            )
        }else{
            return null
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setToastTrue() {
            dispatch(setToastAction())
        },
        setInputFocus(list) {
            dispatch(inputTrueAction())
            if(list.size) {
                return 
            }else{
                dispatch(getSearchList())
            }
        },
        setInputBlur() {
            dispatch(inputFalseAction())
        },
        setDarkTrue() {
            dispatch(trueDarkAction())
            let element = document.querySelector('html')
            element.style.backgroundColor = '#3f3f3f'
            element.style.color = '#c8c8c8'
        },
        setDarkFalse() {
            dispatch(falseDarkAction())
            let element = document.querySelector('html')
            element.style.backgroundColor = '#fff'
            element.style.color = '#000'
        },
        showDarkModel() {
            dispatch(changeDarkModel())
        },
        mouseOverTrue() {
            dispatch(setMouseTrueAction())
        },
        mouseOverFalse() {
            dispatch(setMouseFalseAction())
        },
        changePage(page, circle) {
            if(circle.style.transform) {
                let current = circle.style.transform
                current = parseInt(current.replace(/\D/ig, '')) + 180
                circle.style.transform = `rotate(${current}deg)`
            }else{
                circle.style.transform = 'rotate(180deg)'
            }
            if(page === 3) {
                page = 1
            }else{
                page++
            }
            dispatch(changePageAction(page))
        },
        changeBackTop() {
            dispatch(changeBackAction())
        },
        clearToken() {
            dispatch(setTokenAction(''))
        }
    }   
}
const mapStateToProps = (state) => {
    return {
        isFocus: state.get('isFocus'),
        isDark: state.get('darkTheme'),
        darkModel: state.get('showDarkModel'),
        searchModelShow: state.get('isSearchShow'),
        searchList: state.get("searchList"),
        mouseOver: state.get('isMouseOver'),
        page: state.get('currentPage'),
        isHome: state.get('isInHome'),
        isShowBack: state.get('showBackTop'),
        darkTheme: state.get('darkTheme'),
        token: state.get('token')
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)