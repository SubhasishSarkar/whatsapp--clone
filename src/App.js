import React from 'react';
import './App.css';

import Login from './Login';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useStateValue } from './StateProvider'

function App() {
    const [{user}, dispatch] = useStateValue();
    return (
      <div className="App">
      {!user?(
          <Login/>
      ):(
        <div className="app__body">
            <Router>
                <Sidebar/>
                    <Switch>
                        <Route path="/room/:roomId">
                            <Chat/>
                        </Route>
                        <Route path="/">
                            <Chat/>
                        </Route>
                    </Switch>
            </Router>
        </div>                
      )}
    </div>
  );
}

export default App;
