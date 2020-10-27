import React , {Fragment} from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style.js';
import Iconfont from './static/iconfont/style'
import App from './App';
import store from './store/index'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Fragment>
      <GlobalStyle></GlobalStyle>  
      <Iconfont></Iconfont>
      <Provider store = {store}>
          <App></App>
      </Provider>
    </Fragment>,
  document.getElementById('root')
);

