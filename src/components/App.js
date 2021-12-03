import React from 'react';   
import { BrowserRouter } from 'react-router-dom';   
import { Route, Routes } from "react-router"
import { Provider } from 'react-redux';   
import store from '../redux/configureStore';   
import Greeting from './Greeting';   

const App = () => (    
  <Provider store={store}>   
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={< Greeting />} /> 
      </Routes>
    </BrowserRouter>    
  </Provider>);    
     
export default App;