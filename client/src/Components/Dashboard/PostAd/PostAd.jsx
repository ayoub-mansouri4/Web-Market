import React from 'react';
import Appbar from '../Appbar';
import { Grid,Paper } from '@material-ui/core';
import PostAdInterface from './PostAdInterface';
const PostAd = () => {
    return ( 
        <React.Fragment>
            <Grid container   >
                <Grid item >
                    <Appbar/>
                </Grid>
           </Grid>
           <Grid container   style={{textAlign:'center',width:'50%',margin:'70px auto 0 auto'}}  >
                    <Grid item   md={12} xs={12} sm={12}>
                    <Paper elevation={9} style={{padding:'0 0 10px 0'}} >
                             <PostAdInterface  /> 
                   </Paper>
                </Grid>
            </Grid>
       </React.Fragment>
     );
}
 
export default PostAd;