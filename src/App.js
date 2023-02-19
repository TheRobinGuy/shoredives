import './App.css';
import NavBar from './pages/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import DiveSites from './pages/DiveSites';

function App() {
  return (
    <div className="App">
      <div className='bodyWrapper'>
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

export default App;
