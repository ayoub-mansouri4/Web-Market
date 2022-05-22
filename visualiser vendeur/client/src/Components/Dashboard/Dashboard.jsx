import React from 'react';
import Appbar from './Appbar';
import { Grid } from '@material-ui/core';
import SearchBar from '../Home/SearchBar';
const Dashboard = (props) => {
    return ( 
        <React.Fragment>
             <Grid container   >
                    <Grid item >
                        <Appbar seDeconnecter={props.seDeconnecter}/>
                    </Grid>
            </Grid>
            <Grid container   alignItems='center' style={{margin:'5% auto 0 auto'}}  >
                    <Grid item   md={12} xs={12} sm={12}>
                      <SearchBar/> 
                    </Grid>
             </Grid>
        </React.Fragment>
     );
}
 
export default Dashboard;
