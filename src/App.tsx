import React from 'react';
import { Route, Switch } from "react-router";
import { Home } from './pages/Home/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Header } from './shared/Header/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/month-statistics" component={MonthStatistics} exact/>
      </Switch>
    </div>
  );
}

export default App;
