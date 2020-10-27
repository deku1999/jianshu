import {CHANGE_SHOW_FALSE, CHANGE_SHOW_TRUE, SET_INPUT_TRUE,SET_INPUT_FALSE, SET_DARK_TRUE, SET_DARK_FALSE, Dark_Model, SEARCH_LIST_DATA
,SET_MOUSE_TRUE, SET_MOUSE_FALSE, CHANGE_PAGE,SET_HOME_TRUE, SET_HOME_FALSE,SET_ARTICLE_LIST, SET_AUTHOR_LIST,CHANGE_BACK_TOP, SET_TOKEN_NAME} from './ActionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'
export const getToastAction = () => ({
    type: CHANGE_SHOW_FALSE
})
export const setToastAction = () => ({
    type: CHANGE_SHOW_TRUE
})
export const inputTrueAction = () => ({
    type: SET_INPUT_TRUE
})
export const inputFalseAction = () => ({
    type: SET_INPUT_FALSE
})
export const trueDarkAction = () => ({
    type: SET_DARK_TRUE
})
export const falseDarkAction = () => ({
    type: SET_DARK_FALSE
})
export const changeDarkModel = () => ({
    type: Dark_Model
})
export const searchListAction = (data, totalPage) => ({
    type: SEARCH_LIST_DATA,
    data,
    totalPage
})
export const getSearchList = () => {
    return (dispatch) => {
        axios.get('/api/searchLIst.json').then( res => {
            let {data} = res.data
            let totalPage = Math.ceil(data.length/10)
            data = fromJS(data)
            dispatch(searchListAction(data, totalPage))
        }).catch(err => {
            window.alert('网络请求出错啦，请刷新页面重试')
        })
    }
}
export const setMouseTrueAction = () => ({
    type: SET_MOUSE_TRUE 
})
export const setMouseFalseAction = () => ({
    type: SET_MOUSE_FALSE
})
export const changePageAction = (page) => ({
    type: CHANGE_PAGE,
    page
})
export const setHomeTrueAction = () => ({
    type: SET_HOME_TRUE
})
export const setHomeFalseAction = () => ({
    type: SET_HOME_FALSE
})
export const setArticle = (value) => ({
    type: SET_ARTICLE_LIST,
    value
})
export const setAuthor = (value) => ({
    type: SET_AUTHOR_LIST,
    value
})
export const setArticleAction = () => {
    return (dispatch) => {
        axios.get('/api/articleList.json').then(res => {
            let {data} = res.data
            data = fromJS(data)
            dispatch(setArticle(data))
        }).catch(err => {
            window.alert('网络不好请重新刷新页面')
        })
    }
}
export const setAuthorAction = () => {
    return (dispatch) => {
        axios.get("/api/author.json").then(res => {
            let {data} = res.data
            data = fromJS(data)
            dispatch(setAuthor(data))
        }).catch(err => {
            window.alert('网络不好请重新刷新页面')
        })
    }
}
export const changeBackAction = () => ({
    type: CHANGE_BACK_TOP
})
export const setArticleMoreAction = (value) => {
    return (dispatch) => {
        axios.get('/api/articleList.json').then(res => {
            let {data} = res.data
            data = data.concat(value)
            data = fromJS(data)
            dispatch(setArticle(data))
        }).catch(err => {
            window.alert('网络不好请重新刷新页面')
        })
    }
}
export const setTokenAction = (name) => ({
    type: SET_TOKEN_NAME,
    name
})