import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { Element, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51HTtlzL1aOd0hkV1V2fGHofiZ0BPu3y0O5IdOLSu0pAU9CgOpXluPsNNCXwSGKaHf8K4MsZUFQjqOFAvQSq2YfHW00dmVUjRue"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("authUser", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header></Header>
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header></Header>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
