import React, { Component } from 'react';
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

class App extends Component {

  state = {
    isInit: false
  }

  onComponentDidMount() {
    try {
      firebase.initializeApp(fbConfig);
      this.setState({ isInit : true });
    } catch (err) {
      console.warn("no fb init.");
    }
  }

  render(){

    const store = null;
    const rrfProps = null;

    if(this.state.isInit) {
      store = createStore();
      rfProps = {
          firebase,
          config: { userProfile: "users" },
          dispatch: store.dispatch
      }; 
    } 

    return (
      store && rrfProps &&
        <Provider store={store}>
                <ReactReduxFirebaseProvider {...rrfProps}>
                  <div style={styles}>
                    <Todos />
                    <Footer />
                  </div>npm asudit fix 
                </ReactReduxFirebaseProvider>
              </Provider>,
            document.getElementById('root')              
    )
      };
}

export default App;