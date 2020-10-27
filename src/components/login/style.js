import styled from 'styled-components'
export const Contain = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #f1f1f1;
    z-index: 101;
`
export const Image = styled.div`
    position: absolute;
    top: 56px;
    left: 56px;
`
export const LoginArea = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    width: 300px;
    height: 280px;
    padding: 50px 50px 30px;
    background-color: #fff;
    .info{
        width: 100%;
        position: relative;
        input:first-child{
            border-radius: 4px 4px 0 0;
            border-bottom: none;
        }
        input:last-child{
            border-radius: 0 0 4px 4px;
        }
        span{
            position: absolute;
            font-size: 19px;
            color: #969696;
        }
        span:last-child{
            top: 65px;
            left: 10px;
        }
        .first{
            top: 16px;
            left: 10px;
        }
    }
`
export const Header = styled.h4`
    font-size: 18px;
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
    text-align: center;
    a{
        text-decoration: none;
        color: #969696;
    }
    span,b{
        padding: 10px;
    }
    span{
        cursor: pointer;
    }
    .login{
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
`
export const Input = styled.input`
    box-sizing: border-box;
    padding: 4px 12px 4px 40px;
    border: 1px solid #c8c8c8;
    width: 100%;
    height: 50px;
    background-color: #eee;
`
export const Button = styled.button`
    margin-top: 30px;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    width: 100%;
    outline: none;
`