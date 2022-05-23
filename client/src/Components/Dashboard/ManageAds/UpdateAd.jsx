import React,{useState,useRef, useEffect} from 'react';
import  {TextField,makeStyles,Button,Select,Grid} from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Appbar from '../Appbar';


const UpdateAd = (props) => {

 
    const history=useHistory()
    const useStyles=makeStyles({
        input:{
            display:'block',
            marginBottom:'4%',
            
        },
        images:{
            // opacity:'0',
            width:'10%',
            marginRight:'0.5%',
            "&:hover": {
                backgroundColor: "#ffffff"
              }
        },
        icones:{
            marginRight:'20px',
            color:'#ff3333'
        }
    
    })
 
    const [title,setTitle]=useState(props.match.params.title);
    const [description,setDescription]=useState(props.match.params.desc);
    const [email,setEmail]=useState(props.match.params.email);
    const [phone,setPhone]=useState(props.match.params.phone);
    const [city,setCity]=useState(props.match.params.ville);
    useEffect(()=> {
        axios.post("http://localhost:3001/editAd", {
            id_Ad:props.match.params.id,
        }).then((respense) => {
            //console.log(respense.data);
            if(respense.data.title!=null)setTitle(respense.data.title)
            if(respense.data.description!=null)setDescription(respense.data.description)
            if(respense.data.email!=null)setEmail(respense.data.email)
            if(respense.data.phone!=null)setPhone(respense.data.phone)
            if(respense.data.city!=null) setCity(respense.data.city)
    })
    },[])
  

   
    const update_Ad=()=>{
        axios.post('http://localhost:3001/updateAd',{
            id_Ad:props.match.params.id,
            title:title,
            email:email,
            description:description,
            phone:phone,
            city:city

        }).then(
            ()=>console.log('request has been sent')
        )
        history.push(`/editAds`)
   }
    
  
   const classes=useStyles()

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

    return ( 
        <React.Fragment>
             <Grid container   >
                <Grid item >
                    <Appbar/>
                </Grid>
           </Grid>
           <Grid container   style={{textAlign:'center',width:'50%',margin:'70px auto 0 auto'}}  >
                    <Grid item   md={12} xs={12} sm={12}>
             <TextField className={classes.input}  placeholder={'Titre :'+props.match.params.title} variant='outlined'  onChange={(e)=>setTitle(e.target.value)} />
             <TextField className={classes.input}  placeholder={'Description :'+props.match.params.desc} multiline rows={4}  variant='outlined'  onChange={(e)=>setDescription(e.target.value)}/>
             <TextField className={classes.input} placeholder={'Email :'+props.match.params.email}  variant='outlined'  onChange={(e)=>setEmail(e.target.value)}/>
             <TextField className={classes.input} placeholder={'Téléphone :'+props.match.params.phone} variant='outlined'  onChange={(e)=>setPhone(e.target.value)}/>
             <Select  onChange={(event) => {setCity(event.target.value)}} native className={classes.input}    style={{width:'40%',margin:'4% auto'}}  defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled  style={{fontWeight:'bold'}}>Ville</option>
                        <option value="Casablanca">Casablanca</option>
                        <option value="Rabat">Rabat</option>
             </Select>
              <Button variant='contained'  size='large'
              className={classes.input} style={{width:'50%',margin:'0 auto'}} onClick={update_Ad}>modifier l'annonce</Button>
                 </Grid>
            </Grid>
            
        </React.Fragment>
     );
}
 
export default UpdateAd ;