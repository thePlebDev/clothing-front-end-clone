import React from 'react';
import {Switch,Route} from 'react-router-dom'

import NavBar from '../NavBar';
import Home from '../../StatelessComponents/Home';
import Jackets from '../Jackets';
import Register from '../Register';

const App = ()=>{

  return(
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/jackets' component={Jackets} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </div>
  )
}


export default App
