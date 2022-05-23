import React from 'react';
import { useHistory } from "react-router-dom";
import { Grid,AppBar,Toolbar,Typography } from '@material-ui/core';
import { Button,Popover } from '@material-ui/core';
import {List,ListItem,Paper} from '@material-ui/core'
import {ChevronRightSharp,Store} from '@material-ui/icons'
import { Link } from 'react-router-dom';
import { ExitToAppOutlined,AccountCircle } from '@material-ui/icons'
const Appbar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;

      const history = useHistory();

    const toMyAccount = () => {
        history.push('/MyAccount');
    }
    const toHome = () => {
      history.push('/home');
    }

    const toPostAd = () => {
      history.push('/PostAd');
    }
    const toManageAds= () => {
      history.push('/editAds');
    }

    return ( 
        <AppBar style={{backgroundColor:'#6ab5a6'}} >
            <Toolbar>
                <Grid container>
                    <Grid item md={9} xs={6}>
                    <Button
                      onClick={toHome}
                       endIcon={<Store style={{color:'white',fontSize:'200%'}}/>}>
                           
                              <Typography variant='h5' style={{color:'white'}}>Web Market</Typography>
                        
                           </Button>
                    </Grid>
                    <Grid item md={1} xs={2}style={{float:'right'}}>
                        <Button size='large' endIcon={ <AccountCircle fontSize='large' style={{color:'white'}}/>}aria-describedby={id} color="primary" onClick={handleClick} >
                           
                        </Button>
                        <Popover
                       id={id}
                       open={open}
                       anchorEl={anchorEl}
                       onClose={handleClose}
                       anchorOrigin={{
                         vertical: 'bottom',
                         horizontal: 'center',
                       }}
                       transformOrigin={{
                         vertical: 'top',
                         horizontal: 'center',
                       }}
                        >
<Paper style={{backgroundColor:'#6ab5a6'}} >
                <List>
                    <ListItem >
                       <Button
                        onClick={toMyAccount}
                       endIcon={<ChevronRightSharp style={{color:'white'}}/>}>
                              
                              <Typography align='left' style={{color:'white'}}>
                              Mon compte
                              </Typography>
                          
                           </Button>
                    </ListItem>
                    <ListItem>
                    <Button
                       onClick={toPostAd}
                       endIcon={<ChevronRightSharp style={{color:'white'}}/>}>
                              <Typography align='left' style={{color:'white'}}>
                              Déposer une annonce
                              </Typography>                           
                           </Button>
                    </ListItem>
                    <ListItem>
                    <Button
                    onClick={toManageAds}
                       endIcon={<ChevronRightSharp style={{color:'white'}}/>}>
                              <Typography align='left' style={{color:'white'}}>
                              Gérer vos annonces
                              </Typography>
                           </Button>
                    </ListItem>
                  
                </List>
                </Paper>

                        </Popover>
                    </Grid>
                    <Grid item md={2} xs={4}style={{float:'right'}}  >
                      <Link to='/' style={{textDecoration:'none'}}>
                      <Button 
                        onClick={props.seDeconnecter}
                        endIcon={<ExitToAppOutlined />} style={{color:'white'}}>
                           Se deconnecter
                        </Button>
                      </Link>
                        
                    </Grid>
                </Grid>
           </Toolbar>
            </AppBar>
     );
}
 
export default Appbar;