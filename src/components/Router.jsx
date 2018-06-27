import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import EventList from './EventList';
import ProduceList from './ProduceList';

function Router() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/EventList' component={EventList} />
        <Route path='/ProduceList' component={ProduceList} />
      </Switch>
    </div>
  );
}

export default Router;
