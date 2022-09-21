import './App.css'
import NavBar from './components/nav/NavBar'
import ItemListContainer from './components/pages/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting1="Bienvenido a" greeting2="ItemListContainer"/>
    </div>
  );
}

export default App;
