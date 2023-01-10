import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ImageContainer = () => {
    let imageUrl = "https://i0.wp.com/www.maproomblog.com/xq/wp-content/uploads/2020/10/barr-atlas-scotland.jpg?w=1383&ssl=1"
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <Item>xs=4</Item>
                </Grid>
                <Grid xs={4}>
                    <Item>
                    <p>Image Container Working</p>
                    <img style={{ width: 500, height: 450 }} src={imageUrl}></img>   
                    </Item>
                </Grid>
                <Grid xs={4}>
                    <Item>xs=4</Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ImageContainer