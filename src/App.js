import './App.css';
import NavBar from './pages/Navbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import DiveSites from './pages/DiveSites';

function App() {
  return (
    <div className="App">
      <div className='bodyWrapper'>
        {/* <NavBar></NavBar> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="dive" element={<DiveSites />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
export default App;
