import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import "firebase/database";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import createStore from "./createStore";
import Todos from "./Todos";

const fbConfig = {
  apiKey: "AIzaSyCTUERDM-Pchn_UDTsfhVPiwM4TtNIxots",
  authDomain: "redux-firebasev3.firebaseapp.com",
  databaseURL: "https://redux-firebasev3.firebaseio.com",
  storageBucket: "redux-firebasev3.appspot.com",
  messagingSenderId: "823357791673"
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
