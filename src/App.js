import './App.css';
import ImageContainer from './components/ImageContainer.js'
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className='bodyWrapper'>
        <NavBar></NavBar>
        <ImageContainer></ImageContainer>
      </div>
    </div>
  );
}

export default App;
