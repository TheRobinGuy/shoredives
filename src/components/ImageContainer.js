import * as React from 'react';
import Paper from '@mui/material/Paper';

const ImageContainer = () => {
    let imageUrl = "https://i0.wp.com/www.maproomblog.com/xq/wp-content/uploads/2020/10/barr-atlas-scotland.jpg?w=1383&ssl=1"
    return(
        <Paper>
            <p>Image Container Working</p>
            <img style={{ width: '100%' }} src={imageUrl}></img>   
        </Paper>
    )
}

export default ImageContainer