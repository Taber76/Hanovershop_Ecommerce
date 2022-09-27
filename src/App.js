import './App.css'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavBar from './components/nav/NavBar'
import ItemListContainer from './components/pages/ItemListContainer'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <ItemListContainer greeting="HANOVER SHOE SHOP"/>
      </Router>
      
    </div>
  );
}

export default App;
