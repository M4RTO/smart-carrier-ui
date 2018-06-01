import React, { Component } from 'react';
import './App.css';
import { Router} from 'react-router-dom'
import RouteSwitch from "../routing/RouteSwitch"
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();


class App extends Component {
  render() {
    return (
        <div>
            <Router history={history}>
                <div>
                    <RouteSwitch/>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
