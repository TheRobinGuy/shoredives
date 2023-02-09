import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ImageContainer from './ImageContainer';

const GridLayout = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <Paper></Paper>
                </Grid>
                <Grid xs={4}>
                    <Paper></Paper>
                </Grid>
                <Grid xs={4}>
                    <Paper>
                        <ImageContainer/>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default GridLayout