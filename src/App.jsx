import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./components/Card";
import Students from "./components/Students";
import List from "./components/List";
import Button from "./components/Button"

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Header />
          <Food />
          <Footer />
        </Route>

        <Route exact path="/card">
          <Card />
          <Card />
          <Card />
        </Route>

        <Route exact path="/props">
          <Students name = "Kusukabe" age={30} isStudent={true}/>
          <Students name = "Hakari" age={25} isStudent={false}/>
          <Students name = "Yamazaki" age={22} isStudent={true}/>
        </Route>

        <Route exact path="/render-lists">
          <List/>    
        </Route>

        <Route exact path="/click-event">
          <Button/>    
        </Route>





      </Switch>
    </Router>
  );
}

export default App;
