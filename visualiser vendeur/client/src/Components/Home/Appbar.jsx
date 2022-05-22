import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import {TextField,Grid} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  Appbar:{backgroundColor:'#6ab5a6'},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight:'bold',
    flexGrow: 1
  },
}));

const Appbar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container direction='column'>
        <Grid item>
          <AppBar className={classes.Appbar} >
            <Toolbar>
              <Typography variant="h5" className={classes.title}>
                Web Market
              </Typography>
              <a href="#footer" style={{textDecoration:'none',color:'white'}}>
              <Typography variant="body1" style={{marginRight:'8px',fontWeight:'bold'}}> Contactez-nous</Typography>
              </a>
              <Link to='/login' style={{textDecoration:'none',color:'white'}} >
                <Typography variant="subtitle1" style={{fontWeight:'bold'}} >
                  Se connecter / s'inscrire
                </Typography>
              </Link>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Appbar;