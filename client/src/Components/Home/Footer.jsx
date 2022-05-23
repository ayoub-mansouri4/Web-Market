import React from "react";
import { Grid,Typography,makeStyles,TextField,Button,Paper } from "@material-ui/core";
import {ButtonGroup,IconButton} from '@material-ui/core'
import {Send,Facebook,Instagram,Twitter} from '@material-ui/icons'
const Footer = () => {
   const useStyles=makeStyles({
      inputs:{display:'block'}
   })
   const classes=useStyles();
    return ( 
       <Grid container  style={{backgroundColor:'#93e7d7'}}  >
                 <Grid item  xs={6} md={6} sm={6} style={{display:'inline',float:'left'}} >
                   <Typography variant='h6' style={{margin:'0 0 0 11%'}}>avito.ma fait partie d'un réseau international de sites des petites annonces</Typography>    
                     <ButtonGroup variant='contained' style={{margin:'1% 0 0 11%',backgroundColor:'white'}}>
                        <IconButton style={{color:'#4c61ff'}}><Facebook/></IconButton>
                        <IconButton color='secondary'><Instagram/></IconButton>
                        <IconButton style={{color:'#49f5d7'}}><Twitter/></IconButton>
                     </ButtonGroup>
                 </Grid>

                <Grid item  xs={6} md={6} sm={6} style={{display:'inline',float:'right'}} >
                  <Paper style={{textAlign:'center',width:'70%',margin:'0 auto',backgroundColor:'#6ab5a6'}} elevation={10} >
                     <TextField variant="standard" placeholder="nom" className={classes.inputs}/>
                     <TextField variant="standard" placeholder="Objet" className={classes.inputs}/>
                     <TextField variant="standard" placeholder="email" className={classes.inputs}/>
                     <TextField variant="standard" placeholder="Message" className={classes.inputs}/>
                     <Button endIcon={<Send/>}>Envoyer</Button>
                  </Paper>
                </Grid>

       </Grid>
     );
}
 
export default Footer;