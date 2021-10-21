import "./App.css";
import Login from "./Login/Login";
import Register from "./Signup/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";

import Password from "./Password/Password";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/password" component={Password} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
