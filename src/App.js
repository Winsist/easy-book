import React from 'react';
import Header from './pages/common/header'
import store from './store'
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail'
import RecommendWriters from './pages/writers'


function App(){
  return ( 
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route path="/" exact component={Home}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/recommendwriters" component={RecommendWriters}/>
          </div>
        </Router>
      </Provider>
     );
}
  
export default App;

