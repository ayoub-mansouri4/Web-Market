import React from "react";
import Appbar from "./Appbar";
import SearchBar from "./SearchBar";
import { Grid,makeStyles } from "@material-ui/core";
import Footer from "./Footer";
const Home = () => {
   const useStyles=makeStyles({
      footer:{
         width:'100%',
         //  position:'fixed',
         bottom:'0'
      }
});
const classes=useStyles()
    return (
       <React.Fragment>
           <Grid container direction='column' alignItems='center' >
              <Grid item md={12}>
                   <Appbar/>
              </Grid>
            </Grid>
               
                   <SearchBar/>
         
           {/* <Grid container direction='column' alignItems='center' >
                <Grid item md={12} xs={12} className={classes.footer} id="footer"  >
                  
                  
                  
                   
                </Grid>
             </Grid> */}
              <Footer />
         
   </React.Fragment> 
           
     );
}
 
export default Home;