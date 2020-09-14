import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">

     <div className='app__body'>
       <Router>
         <Switch>
           <Route path='/'>
             <h1>hitting home screen</h1>
           </Route>
          <Sidebar />
           <Chat />
        </Switch>


       </Router>
     </div>
    </div>
  );
}

export default App;
