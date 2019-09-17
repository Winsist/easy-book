import {createStore, applyMiddleware, compose} from 'redux'   //引用第三方方法
import reducer from './reducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction'
// const composeEnhancers = typeof window === 'object' &&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
// window.__REDUX_DEVTOOLS_EXTENSION_CheOMPOSE__({}) : compose;
const composeEnhancers  = composeWithDevTools({})
console.log('composeEnhancers',composeEnhancers)

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducer,enhancer) //创建一个公共存储仓库

export default store;   //导出去 