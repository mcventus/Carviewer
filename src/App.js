import './App.css';
import Header from './components/header/Header'
import Main from './components/main/Main'

function App() {
  return (
    <div className="App">
      <div className='header-container'>
        <Header/>
      </div>
      <div className='main-container'>
        <Main/>
      </div>
    </div>
  );
}

export default App;
