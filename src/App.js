import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';

import animation from './animation';

import './App.css';

import CardBegin from './components/CardBegin';
import CardStepOne from './components/CardStepOne';

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      routes: [
        { path: '/', name: 'Home', Component: CardBegin },
        { path: '/step-1', name: 'CardStepOne', Component: CardStepOne }
      ]
    }
  }

  onEnter = (node, isAppearing) => {
    animation.show(node, isAppearing)
  }

  onExit = (node) => {
    animation.hide(node)
  }

  render() {
    const { routes } = this.state;

    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <Transition key={location.key} timeout={400} onEnter={this.onEnter} onExit={this.onExit}>
              <Switch location={location}>
                {routes.map(({ path, Component }) => (
                  <Route key={path} exact path={path}>
                    {({ match }) => <Component in={match != null} />}
                  </Route>
                ))}
              </Switch>
            </Transition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
