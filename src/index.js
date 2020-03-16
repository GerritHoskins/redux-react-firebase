import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import createStore from "./createStore";
import Todos from "./Todos";

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
} catch (err) {}

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const store = createStore();

const rrfProps = {
  firebase,
  config: {
    userProfile: "users"
  },
  dispatch: store.dispatch
};

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <div style={styles}>
          <h2>Start editing to see some magic happen {"\u2728"}</h2>
          <Todos />
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

render(<App />, document.getElementById("root"));
