import React from 'react';
import Header from './pages/common/header'
import store from './store'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail'
import RecommendWriters from './pages/writers'
import Login from './pages/login'


function App(){
  const pathname=window.location.pathname;
  const isLoginPage = pathname === '/login';
  return ( 
      <Provider store={store}>
        <Router>
          <div>
            {!isLoginPage ? <Header />:''}
            
            <Route path="/" exact component={Home}/>
            <Route path="/detail/:id" component={Detail}/>
            <Route path="/recommendwriters" component={RecommendWriters}/>
            <Route path="/login" component={Login}/>
          </div>
        </Router>
      </Provider>
     );
}
  
export default App;

