import {fromJS} from 'immutable'
import {CHANGE_SHOW_FALSE, CHANGE_SHOW_TRUE, SET_INPUT_TRUE, SET_INPUT_FALSE, SET_DARK_TRUE, SET_DARK_FALSE, Dark_Model, SEARCH_LIST_DATA,
SET_MOUSE_TRUE, SET_MOUSE_FALSE, CHANGE_PAGE, SET_HOME_FALSE, SET_HOME_TRUE, SET_ARTICLE_LIST, SET_AUTHOR_LIST, CHANGE_BACK_TOP, SET_TOKEN_NAME} from './ActionTypes'
const defaultState = fromJS({
    // beta模块
    isShowToast: false,
    isFocus: false,
    isInHome: true,
    // 是否是夜间主题
    darkTheme: false,
    //  夜间主题模块显示
    showDarkModel: false,
    // 搜索清单
    searchList: [],
    // 搜索模块鼠标是否移出
    isMouseOver: false,
    currentPage: 1,
    totalPage: 1,
    // 文章列表
    articles: [],
    // 作者列表
    authors: [],
    showBackTop: false,
    token: ''
})
export default (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_SHOW_FALSE:
            return state.set('isShowToast', false)
        case CHANGE_SHOW_TRUE:
            return state.set('isShowToast', true)
        case SET_INPUT_TRUE: 
            return state.set('isFocus', true)
        case SET_INPUT_FALSE:
            return state.set('isFocus', false)
        case SET_DARK_TRUE: 
            return state.set('darkTheme', true)
        case SET_DARK_FALSE:
            return state.set('darkTheme', false)
        case Dark_Model:
            return state.set('showDarkModel', !state.get('showDarkModel'))
        case SEARCH_LIST_DATA:
            return state.set('searchList', action.data).set('totalPage', action.totalPage)
        case SET_MOUSE_FALSE:
            return state.set('isMouseOver', false)
        case SET_MOUSE_TRUE:
            return state.set('isMouseOver', true)
        case CHANGE_PAGE:
            return state.set('currentPage', action.page)
        case SET_HOME_TRUE:
            return state.set('isInHome', true)
        case SET_HOME_FALSE:
            return state.set("isInHome", false)
        case SET_ARTICLE_LIST:
            return state.set("articles", action.value)
        case SET_AUTHOR_LIST:
            return state.set('authors', action.value)
        case CHANGE_BACK_TOP:
            return state.set('showBackTop', !state.get('showBackTop'))
        case SET_TOKEN_NAME:
            return state.set('token', action.name)
        default: 
            return state
    }
}