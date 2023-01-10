import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const ImageContainer = () => {
    let imageUrl = "https://i0.wp.com/www.maproomblog.com/xq/wp-content/uploads/2020/10/barr-atlas-scotland.jpg?w=1383&ssl=1"
    return(
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
                        <p>Image Container Working</p>
                        <img style={{ width: '100%' }} src={imageUrl}></img>   
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ImageContainer