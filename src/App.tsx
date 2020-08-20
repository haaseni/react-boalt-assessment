import React from 'react'
import './styles/index.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Signin from './components/SignIn'
import Signup from './components/Signup' 
import Products from './components/Products' 
import Welcome from './components/Welcome' 
import IPhone from './components/IPhone' 
import Authentication from './utils/Authentication'

const App = () => {
  return (
    <TransitionGroup>
      <CSSTransition
      timeout={{ enter: 1000, exit: 1000 }}
      classNames={'pagefade'}>
      <Router>
      <div className="App">
        <Switch>
        <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <PrivateRoute path="/products">
            <Products />
          </PrivateRoute>
          <PrivateRoute path="/welcome">
            <Welcome />
          </PrivateRoute>
          <PrivateRoute path="/iphone">
            <IPhone />
          </PrivateRoute>
          <Route path="/">
            <Signin />
          </Route>
        </Switch>
      </div>
      </Router>
      </CSSTransition>
    </TransitionGroup>
  );
}

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        Authentication.isAuthenticated ? (children) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
