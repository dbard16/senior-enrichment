'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/store'
import Main from './components/Main'
//hello

render (
<Provider store={store}>
  <div>
    <Router>
      <Main />
    </Router>
  </div>
</Provider>
    ,
  document.getElementById('main')
)


