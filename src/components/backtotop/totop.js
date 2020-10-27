import React from 'react'
import {ToTop} from './style'
function BackToTop() {
    return (
        <ToTop onClick = {toTop}>
        </ToTop>
    )
}
function toTop() {
    let top = document.documentElement.scrollTop || document.body.scrollTop
    let timer = setInterval(() => {
        top -= 50
        if(top <= 0 ){
            window.scrollTo(0,0)
            clearInterval(timer)
        }
        window.scrollTo(0, top)
    } ,8)
}
export default BackToTop