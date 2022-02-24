import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import DoggosList from "./components/DoggosList";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <header>
        <h1>DOGGOS APP</h1>
      </header>

      <nav style={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>

      <main>
        <Switch>
          <Route exact path="/" component={DoggosList} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </main>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: '50px'
  },
};

export default App;
