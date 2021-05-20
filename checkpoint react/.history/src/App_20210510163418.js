import './App.css';
// import NavBar from './components/NavBar'
import Main from './components/Main'
import Header from "./components/Header/Header"
import brand from "./components/brand/Brand"

function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
      <brand />
    </div>
  );
}

export default App;