import React from 'react';
import { render } from "react-dom";
import createStore from "./stores/createStore";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";
import Todos from "./reducers/todos";
import Footer from "./components/Footer";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import * as serviceWorker from './createServiceWorker';

const fbConfig = {
  apiKey: "AIzaSyBJj_sA3OqXQGrm2UmSUvbTKKp34b42u6Y",
  authDomain: "dbtronics-79c66.firebaseapp.com",
  databaseURL: "https://dbtronics-79c66.firebaseio.com",
  projectId: "dbtronics-79c66",
  storageBucket: "dbtronics-79c66.appspot.com",
  messagingSenderId: "299370403853",
  appId: "1:299370403853:web:2f2a63607f773821259d44"
};

export const App = () => {

    let store = null;
    let rrfProps = null;
    let isInit= false;

    try {
      firebase.initializeApp(fbConfig);
      isInit = true;
    } catch (err) {
      console.warn("no fb init.");
    }

    if(isInit) {
      store = createStore();
      rrfProps = {
          firebase,
          config: { userProfile: "users" },
          dispatch: store.dispatch
      }; 
    } 
    if(!store || !rrfProps) { 
      return <div>Oops or loading</div>
    }
    else {
      return (        
          <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
              <div>
                <Todos />
                <Footer />
              </div>
            </ReactReduxFirebaseProvider>
          </Provider>      
      )}
  }
            
  render(
      <App />,
      document.getElementById('root')
  ) 

serviceWorker.register();
