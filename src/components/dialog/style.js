import styled from 'styled-components'
export const Toast = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.3);
    z-index: 1000;
`
export const Content = styled.div`
    width: 236px;
    height: 385px;
    padding: 40px 72px 0 72px;
    position: relative;
    background-color: #fff;
    top: 18%;
    left: 50%;
    transform: translate(-50%, 0);
    text-align: center;
    h4{
        font-size: 18px;
        line-height: 25px;
    }
    span{
        color: #e9634c;
    }
    .picture{
        width: 100%;
        margin: 12px 0 8px 0;
        height: 190px;
        img{
            width: 190px;
            height: 190px;
        }
    }
`
export const Close = styled.div`
    background-color: #e9634c;
    color: #fff;
    margin: 25px auto 0;
    width: 190px;
    height: 40px;
    border-radius: 20px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
`