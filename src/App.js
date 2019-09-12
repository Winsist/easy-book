import React from 'react';
import Header from './pages/common/header'
import store from './store'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail'


function App(){
  return ( 
      <Provider store={store}>
        <div>
          <Header />
          {/* <Home /> */}
          <Router>
            <div>
              <Route path="/" exact component={Home}/>
              <Route path="/detail" component={Detail}/>
            </div>
          </Router>
        </div>
      </Provider>
     );
}
  
export default App;

