import React from 'react';
import Appbar from '../Appbar';
import { Grid,Paper } from '@material-ui/core';
import MyAccountInterface from './MyAccountInterface';
const MyAccount = () => {
    return ( 
        <React.Fragment>
             <Grid container   >
                    <Grid item >
                        <Appbar/>
                    </Grid>
            </Grid>
            <Grid container   alignItems='center' style={{textAlign:'center',width:'50%',margin:'70px auto 0 auto  '}}  >
                    <Grid item   md={12} xs={12} sm={12}>
                      <Paper  elevation={9} >
                      <MyAccountInterface /> 
                      </Paper>
                      
                    </Grid>
             </Grid>
        </React.Fragment>
     );
}
 
export default MyAccount;
