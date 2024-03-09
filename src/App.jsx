import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./components/Card";
import Students from "./components/Students";
import List from "./components/List";
import Button from "./components/Button"
import  GroceryList  from "./components/GroceryList";
import BioData from "./components/BioData";
import Counter from "./components/Counter";
import ColorPicker from "./components/ColorPicker";
import Car from "./components/Car"
import ToDoListApp from "./components/ToDoListApp";

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

        <Route exact path="/grocery">
          <GroceryList/>    
        </Route>

        <Route exact path="/biodata">
          <BioData/>    
        </Route>

        <Route exact path="/counter">
          <Counter/>    
        </Route>

        <Route exact path="/colorpicker">
          <ColorPicker/>    
        </Route>

        <Route exact path="/car">
          <Car/>    
        </Route>

        <Route exact path="/to-do-list">
          <ToDoListApp/>    
        </Route>








      </Switch>
    </Router>
  );
}

export default App;
