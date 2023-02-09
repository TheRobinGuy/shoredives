import './App.css';
import GridLayout from './components/GridLayout';
import NavBar from './components/Navbar';
import Grid from '@mui/material/Unstable_Grid2';

function App() {
  return (
    <div className="App">
      <div className='bodyWrapper'>
        <NavBar></NavBar>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <div>Banner Image Here</div>
          </Grid>
          <Grid xs={12}>
            <GridLayout></GridLayout>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
