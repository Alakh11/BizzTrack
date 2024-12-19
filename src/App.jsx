import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SignUpPage from "./components/SignUpPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={SignUpPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/" component={SignUpPage} />
      </Switch>
    </Router>
  );
}

export default App;
