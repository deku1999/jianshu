import React,{ Fragment} from 'react';
import Home from './pages/Home/index'
import Detail from './pages/detail/loadable'
import Head from './components/header/index'
import Toast from './components/dialog/index'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import BackToTop from './components/backtotop/totop'
import Login from './components/login/index'
import Register from './components/register/index'

function App(props) {
  return (
    <Fragment>
      <BrowserRouter>
        <Head></Head>
        <Route path='/' exact component={Home} ></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
        <Route path="/login" exact component = {Login}></Route>
        <Route path='/register' exact component = {Register}></Route>
      </BrowserRouter>
      {props.isShow? <Toast></Toast> : null}
      {props.backTop? <BackToTop></BackToTop> : null}
    </Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    isShow: state.get('isShowToast'),
    backTop: state.get("showBackTop")
  }
}

export default connect(mapStateToProps)(App);
