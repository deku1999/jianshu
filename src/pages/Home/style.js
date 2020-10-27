import styled from 'styled-components'
export const Container = styled.div`
    width: 950px;
    padding: 0 15px;
    margin: 0 auto;
    margin-top: 78px;
    overflow: hidden;
`
export const Article = styled.div`
    float: left;
    width: 625px;
    padding: 15px 0 0 15px;
    li.evening{
        border-color: #2f2f2f;
    }
`
export const Recommend = styled.div`
    float: left;
    width: 280px;
    margin-left:25px;
    padding: 15px 0 0;
`
export const ArticleItem = styled.li`
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    margin: 0 0 15px;
    display: flex;
    .flex-first{
        width: 458px;
        a{
            text-decoration: none;
        }
        .head{
            font-size: 18px;
            color: #2f2f2f;
            margin: 7px 0 4px 0;
            padding-bottom: 6px;
            cursor: pointer;
            :hover{
                color: skyblue;
            }
        }
        .evening{
            color: #c8c8c8;
        }
        .content{
            font-size: 13px;
            line-height: 24px;
            color: #999;
            margin-bottom: 8px;
        }
    }
    .flex-second{
        width: 167px;
        text-align: center;
        img{
            width: 150px;
            height: 100px;
            border-radius: 4px;
        }
    }
`
export const RecommendItem = styled.a`
    cursor: pointer;
    img {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`
export const Download = styled.div`
    box-sizing: border-box;
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    img{
        width: 60px;
    }
    .download{
        margin-left: 10px;
        height: 60px;
        line-height: 20px;
        span:first-child{
            font-size: 15px;
            color: #333;
            vertical-align: -10px;
        }
        span:last-child{
            margin-top: 4px;
            font-size: 13px;
            color: #999;
        }
    }
`
export const Author = styled.div`
    div{
        overflow: hidden;
    }
    .left-author{
        float: left;
        font-size: 14px;
        color: #969696;
    }
`
export const AuthorItem = styled.li`
    margin-top: 15px;
    line-height: 20px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    img{
        width: 48px;
        border-radius: 50%;
        float: left;
    }
    .author{
        margin-left: 60px;
        .evening{
            color: #c8c8c8;
        }
    }
    span:first-child{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
        color: #333;
    }
    span:last-child{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
        display: block;
    }
`
export const Attention = styled.div`
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
`
export const LoadMore = styled.div`
    box-sizing: border-box;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    line-height: 40px;
    color: #fff;
    cursor: pointer;
    text-align: center;
    font-size: 15px;
`