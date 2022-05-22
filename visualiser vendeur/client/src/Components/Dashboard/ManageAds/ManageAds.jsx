import React,{useState} from "react";
import { Grid,Typography } from "@material-ui/core";
import Appbar from "../Appbar";
import axios from "axios";
import Ad from "./Ad";

const ManageAds = () => {
    const [myAds,setMyAds]=useState([])
    axios.post("http://localhost:3001/editAds", {
            id_user : localStorage.getItem('id_user')
        }).then((respense) => {
          //console.log(respense.data);
            setMyAds(respense.data)
    })
    
    
    return (
    <React.Fragment>     
        <Grid container direction='column'>
                 <Grid item md={12}>
                    <Appbar/>
                </Grid>
        </Grid>  
        <Grid container direction='column' alignItems='center' style={{margin:'60px auto 0 auto'}}  >
        {
            myAds.map((elt)=>{
                return(
                    <Grid item md={12}  key={elt.id} style={{margin:'10px 0 0 0'}} >              
                         <Ad key={elt.id} 
                          id_Ad={elt.id}
                          titre={elt.title}
                          nom={elt.nom} 
                          prenom={elt.prenom} 
                          description={elt.description} 
                          email={elt.email}
                          ville={elt.ville}
                          phone={elt.phone}
                          image1={elt.image1}
                          image2={elt.image2}
                          image3={elt.image3}
                          category={elt.categorie}
  
                          />
                    </Grid>
            );
                })
        }
           </Grid> 
        
          {/* {
          myAds.length==0 ? <Typography variant='h2' style={{color:'yellowgreen',textAlign:'center'}}> Aucune annonce!</Typography> : null
          } */}
    </React.Fragment> );
}
 
export default ManageAds;