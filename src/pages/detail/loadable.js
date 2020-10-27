import Loadable from 'react-loadable'
import React from 'react'
const LoadableComponent = Loadable({
	loader: () => import('./index.js'),	//要懒加载的组件的路径
   	loading() {		//加载函数，可以返回一个jsx对象
    	return (<div>正在加载</div>)
	}
})
//导出
export default () => <LoadableComponent></LoadableComponent>