import React from 'react';
import { render } from "react-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import createStore from "./stores/createStore";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";
import Todos from "./reducers/todos";
import Footer from "./components/Footer";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
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
    if( !isLoaded(store) || !isLoaded(rrfProps) ) { 
      return <div>Loading...</div>
    }
    else {
      return (        
          <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>
            <CssBaseline />
            <Container maxWidth="md">              
             <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
                <Todos />
                <Footer />            
                </Typography>
                </Container>
            </ReactReduxFirebaseProvider>
          </Provider>              
      )}
  }
            
  render(
      <App />,
      document.getElementById('root')
  ) 

serviceWorker.register();
