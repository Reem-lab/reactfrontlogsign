import "./App.css";
import signup from "./Auth/signup";
import Login from "./Auth/login";
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <div className="app">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={signup} />
          </Switch>
        </div>
      </Container>
    </>
  );
}

export default App;
