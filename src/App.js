import React, { Component } from 'react';
import './App.css';
import MenuTop from './components/menutop/menuTop';
import Resumos from './components/resumos/resumos';
import Consultas from './components/consultas/consultas';
import Faturamento from './components/faturamento/faturamento';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <MenuTop />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/" exact component={Resumos} />                              
                <Route path="/consultas" component={Consultas} />
                <Route path="/faturamento" component={Faturamento} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
