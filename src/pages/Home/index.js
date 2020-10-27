import React, {Component, Fragment} from 'react'
import {Container, Article, Recommend, ArticleItem, RecommendItem, Download, Author,AuthorItem, Attention, LoadMore} from './style'
import {connect} from 'react-redux'
import {setHomeTrueAction, setArticleAction, setAuthorAction, setArticleMoreAction, setTokenAction} from '../../store/ActionCreators'
import member from '../../static/img/huiyuan.png'
import series from '../../static/img/lianzai.png'
import copyright from '../../static/img/copyright.png'
import classroom from '../../static/img/classroom.png'
import sketch from '../../static/img/jianshu.png'
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor(props) {
        super(props)
        this.showArticle = this.showArticle.bind(this)
        this.showAuthor = this.showAuthor.bind(this)
    }
    render() {
        return (
            <Fragment>
                {/* 主体区域*/}
                <Container>
                    <Article>
                        <ul>
                            {this.showArticle()}
                        </ul>
                        <LoadMore onClick={() => {this.props.loadMore(this.props.articleList.toJS())}}>加载更多</LoadMore>
                    </Article>
                    <Recommend>
                        <RecommendItem>
                            <img src={member} alt="这是一个图片"></img>
                        </RecommendItem>
                        <RecommendItem>
                            <img src={series} alt="这是一个图片"></img>
                        </RecommendItem>
                        <RecommendItem>
                            <img src={copyright} alt="这是一个图片"></img>
                        </RecommendItem>
                        <RecommendItem>
                            <img src={classroom} alt="这是一个图片"></img>
                        </RecommendItem>
                        <Download>
                            <img alt="这是一个图片" src={sketch}></img>
                            <div className="download">
                                <span>下载简书手机App &gt;</span><br></br>
                                <span>随时随地发现和创作内容</span>
                            </div>
                        </Download>
                        <Author>
                            <div ><span className="left-author">推荐作者</span></div>
                            <ul>
                                {this.showAuthor()}
                            </ul>
                        </Author>
                    </Recommend>
                </Container>
            </Fragment>
        )
    }
    componentDidMount() {
        let token = window.sessionStorage.getItem('token')
        if(token) {
            token = token.replace(/[0-9]/gi, '')
            this.props.setToken(token)
        }
        if(this.props.articleList.size === 0 ){
            this.props.changeArticleList()
        }
        this.props.changeAuthorList()
        if(this.props.isInHome) {
            return 
        }else{
            this.props.changeHomeTrue()
        }
    }
    componentWillUnmount() {
    }
    showAuthor() {
        if(this.props.authorList.size) {
            let list = this.props.authorList
            list = list.toJS().slice(0, 5)
            return (
                list.map((item, index) => {
                    return (
                        <AuthorItem key={index}>
                            <img src={item.imgUrl} alt="这是一个作者图片"></img>
                            <Attention>+关注</Attention>
                            <div className="author">
                                <span className={this.props.darkTheme? 'evening' : ''}>{item.name}</span>
                                <span>写了{item.word}k字·{item.like}k喜欢</span>
                            </div>
                        </AuthorItem>
                    )
                })
            )
        }
        else{
            return null
        }
    }
    showArticle() {
        if(this.props.articleList.size) {
            let list = this.props.articleList.toJS()
            return (
                list.map((item,index) => {
                    return (
                    <ArticleItem key={index} className={this.props.darkTheme? 'evening': ''}>
                        <div className="flex-first">
                            <Link to={"/detail/"+ item.id}>
                            <p className={this.props.darkTheme? 'evening head': 'head'}>{item.title}</p>
                            </Link>
                            <p className="content">{item.desc}</p>
                        </div>
                        <div className="flex-second">
                            <img alt="这是一个图片" src={item.imgUrl}/>
                        </div>
                    </ArticleItem>
                    )
                })
            )
        }else{
            return null
        }
    }
}
const mapStateToProps = (state) => {
    return {
        isInHome: state.get("isInHome"),
        articleList: state.get('articles'),
        authorList: state.get('authors'),
        darkTheme: state.get('darkTheme')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeTrue() {
            dispatch(setHomeTrueAction())
        },
        changeArticleList() {
            dispatch(setArticleAction())
        },
        changeAuthorList() {
            dispatch(setAuthorAction())
        },
        loadMore(data) {
            dispatch(setArticleMoreAction(data))
        },
        setToken(name) {
            dispatch(setTokenAction(name))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)