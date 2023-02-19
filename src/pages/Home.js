import * as React from 'react';
import GridLayout from '../components/GridLayout';
import Grid from '@mui/material/Unstable_Grid2';

const Home = () => {
    return(
        <Grid container spacing={2}>
          <Grid xs={12}>
            <h1 style={{color:'white'}}>Welcome to ShoreDives.ie</h1>
          </Grid>
          <Grid xs={12}>
            <GridLayout></GridLayout>
          </Grid>
        </Grid>
    )
}

export default Home;