import React,{Component} from 'react'
import {connect} from 'react-redux'
import {setHomeFalseAction, setArticleAction, setTokenAction} from '../../store/ActionCreators'
import {Container, Out, SolveQuestion} from './style'
import {withRouter} from 'react-router-dom'

class Detail extends Component {
    render() {
        let {articles, darkTheme} = this.props
        let id = +this.props.match.params.id
        let data = articles[id]
        return (data ? (
            <SolveQuestion>
            <Out className = {darkTheme? '' : 'sun'}>
                <Container className = {darkTheme? '': 'active'}>
                    <div>
                        <img src={data.imgUrl} alt="这是一个图片"></img>
                        <div dangerouslySetInnerHTML = {{__html: data.content}}></div>
                        <div dangerouslySetInnerHTML = {{__html: data.content}}></div>
                    </div>
                </Container>
            </Out>
            </SolveQuestion>
        ) : null)   
    }
    componentDidMount() {
        let token = window.sessionStorage.getItem('token')
        if(token) {
            token = token.replace(/[0-9]/gi, '')
            this.props.setToken(token)
        }
        if(this.props.articles.length === 0){
            this.props.getArticle()
        }
        if(this.props.isInHome) {
            this.props.setHomeFalse()
        }else{
            return 
        }
    }
    componentWillUnmount() {
    }
}
const mapStateToProps = (state) => {
    return {
        isInHome: state.get('isInHome'),
        articles: state.get('articles').toJS(),
        darkTheme: state.get('darkTheme')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setHomeFalse() {
            dispatch(setHomeFalseAction())
        },
        getArticle() {
            dispatch(setArticleAction())
        },
        setToken(name) {
            dispatch(setTokenAction(name))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))