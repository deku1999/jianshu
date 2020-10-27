import styled from 'styled-components'
export const ToTop = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 2px 2px 4px rgba(135,206,235,.8) ;
    position: fixed;
    bottom: 100px;
    right: 100px;
    transition: all .5s linear;
    cursor: pointer;
    ::before{
        width: 0;
        height: 0;
        border-width: 9px;
        border-color: transparent;
        border-bottom-color: #8c8c8c;
        border-style: solid;
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -75%);
    }
`