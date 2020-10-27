import styled from 'styled-components'
import logo from '../../static/img/logo.png'
export const Nav = styled.nav`
    margin-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
    $.evening{
        border-bottom: 1px solid #000;
    }
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 1px 2px rgba(0,0,0,.1);
    background-color: #fff;
    z-index: 100;
`
export const Head = styled.div`
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
    height: 58px;
`
export const Logo = styled.div`
    float: left;
    width: 100px;
    height: 56px;
    background: url(${logo});
    background-size: contain;
`
export const Aa = styled.div`
    float: right;
    width: 24px;
    height: 20px;
    padding: 17px 10px;
    cursor: pointer;
    position: relative;
    .aa{
        font-size: 24px;
        color: #777;
    }
    .evening{
        background-color: #3f3f3f;
        ::before{
            border-bottom-color: #3f3f3f; 
        }
    }
`
export const Dark = styled.div`
    position: absolute;
    padding: 10px;
    width: 192px;
    height: 80px;
    box-shadow: 0 2px 20px rgba(0,0,0,.1);
    top: 56px;
    right: -20px;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: #fff;
    .dark{
        flex: 1;
        color: #969696;
        span{
            padding: 10px 13px 10px 17px;
            padding: 10px 13px 10px 17px;
            border: 1px solid #e5e5e5;
            font-size: 15px;
        }
        span:first-child{
            border-radius: 20px 0 0 20px;
            border-right: none;
        }
        span:last-child{
            border-radius: 0 20px 20px 0;
        }
        .active {
            color: #fff;
            background-color: #6dacf4;
        }
    }
    ::before {
        content: '';
        display: inline-block;
        position:absolute;
        width: 0;
        height: 0;
        border: 9px solid transparent;
        border-bottom-color: #fff; 
        top: -18px;
        left: 78%;
    }
    $.evening::before{
        background-color: #3f3f3f;
    }
`
export const Write = styled.div`
    box-sizing: border-box;
    float: right;
    width: 100px;
    height: 40px;
    line-height: 24px;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    a{
        color: #fff;
        text-decoration: none;
    }
    background-color: rgba(234, 111, 90, .9);
    padding: 7px 12px 6px 14px;
    cursor: pointer;
    :hover {
        background-color: rgba(234, 111, 90, 10);
    }
`
export const Signup = styled.div`
    box-sizing: border-box;
    float: right;
    width: 80px;
    height: 38px;
    line-height: 36px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    :hover{
        background-color: rgba(200,200,200,.1);
    }
`
export const Signin = styled.div`
    float: right;
    margin: 11px 6px 0 10px;
    font-size: 15px;
    cursor: pointer;
    color: #969696;
    padding: 10px 12px;
    text-align: center;
    box-sizing: border-box;
`
export const Beta = styled.div`
    box-sizing: border-box;
    float: right;
    width: 57px;
    height: 55px;
    padding: 15px 0px;
    margin: 0 12px;
    cursor: pointer;
    img{
        height: 100%;
    }
`
export const Contain = styled.div`
    width: 800px;
    padding: 0 15px;
    margin: 0 auto;
    height: 58px;
    text-align: center;
    a{
        color: #000;
        text-decoration: none;
    }
    a.evening{
        color: #c8c8c8;
    }
    .nav-item {
        float: left;
        margin-right: 10px;
        height: 58px;
        line-height: 58px;
        font-size: 17px;
        span:first-child {
            margin-right: 5px;
            font-size: 20px;
        }
        .evening{
            color: #c8c8c8;
        }
    }
    .page{
        width: 89px;
    }
    .active{
        color: #ea6f5a;
    }
    .download{
        width: 120px;
    }
`
export const Search = styled.input`
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    transition: all .3s linear;
    &.focus{
        width: 250px;
    }
`
export const InputSearch = styled.div`
    padding-left: 15px;
    float: left;
    height: 58px;
    line-height: 58px;
    position: relative;
    span.focus{
        background-color: #969696;
    }
    div.evening{
        background-color: #3f3f3f;
        color: #c8c8c8;
    }
`
export const SearchModel = styled.div`
    position: absolute;
    padding: 15px 20px 15px 20px;
    width: 200px; 
    top: 60px;
    left: 20px;
    border-radius: 5px;
    box-shadow: 0 5px 9px rgba(0,0,0,.3);
    font-size: 14px;
    color: #666;
    line-height: 20px;
    background-color: #fff;
    ::after {
        content: '';
        display: block;
        clear: both;
    }
`
export const HotSearch = styled.div`
    overflow: hidden;
    margin-bottom: 10px;
    .search-left{
        float: left;
    }
    .search-right{
        float: right;
        cursor: pointer;
    }
    .rotate{
        transition: all .2s linear;
        transform-origin: center center; 
    }   
    .iconfont{
        margin-right: 3px;
        :hover{
            color: #4e6ef2;
        }
    }
`
export const ListItem = styled.li`
    float: left;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
`
export const Magnify = styled.span`
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translate(0,-50%);
    text-align: center;
    line-height: 30px;
`
