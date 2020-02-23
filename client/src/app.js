import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { Route, Switch, HashRouter } from 'react-router-dom';
import reduxMiddlewares from './redux/middlewares';

import Layout from './components/layout';
import Landing from './components/landing';
import Connect from './components/connect/browser';
import Product from './components/connect/product';
import ProductEdit from './components/connect/product.edit';
import User from './components/user';
import Signin from './components/auth/signin';
import SignupWithEmail from './components/auth/signupWithEmail';
import SignupVerification from './components/auth/signupVerification';
import Signout from './components/auth/signout';

import Admin from './components/admin';
import RequireAdmin from './components/admin/requireAdmin';
import RequireAuth from './components/auth/requireAuth';
import Review from './components/review';
import reducers from './reducers';
import {serverConnect} from './actions';

import './style/style.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const store = createStore(
  reducers,
  applyMiddleware(
    reduxMiddlewares,
    loadingBarMiddleware()
  )
);
serverConnect()(store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter hashType='noslash'>
      <Switch>
        <Layout>
          <Route exact path='/' component= {Landing} />

          <Route path='/connect' component= {Connect} />
          
          <Route path='/pd/:productId' component= {Product} />
          <Route path='/edit/pd/:productId' component= {ProductEdit} />
          <Route path='/review/:reviewId' component= {Review} />
          
          <Route path='/signup' component= {SignupWithEmail} />
          <Route path='/user' component= {RequireAuth(User)} />
          
          <Route path='/signupVerification' component= {SignupVerification} />
          <Route path='/signin' component= {Signin} />
          <Route path='/signout' component= {Signout} />

          <Route path='/admin' component= {RequireAdmin(Admin)} />
        </Layout>
      </Switch>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));