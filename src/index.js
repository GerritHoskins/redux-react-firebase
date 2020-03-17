import {React} from 'react';
import { render } from "react-dom";
import createStore from "./stores/createStore";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import App from "./components/App.js";

 const fbConfig = {
  apiKey: "AIzaSyBJj_sA3OqXQGrm2UmSUvbTKKp34b42u6Y",
  authDomain: "dbtronics-79c66.firebaseapp.com",
  databaseURL: "https://dbtronics-79c66.firebaseio.com",
  projectId: "dbtronics-79c66",
  storageBucket: "dbtronics-79c66.appspot.com",
  messagingSenderId: "299370403853",
  appId: "1:299370403853:web:2f2a63607f773821259d44"
};

try {
  firebase.initializeApp(fbConfig);
} catch (err) {
  console.warn("no fb init.");
}

const store = createStore();

const rrfProps = {
  firebase,
  config: { userProfile: "users" },
  dispatch: store.dispatch
};

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};


render(
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <div style={styles}>
            <App />
          </div>
        </ReactReduxFirebaseProvider>
      </Provider>,
      document.getElementById("root")
      );
