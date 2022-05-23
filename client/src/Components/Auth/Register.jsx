import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import Axios from "axios";
import {
  TextField,
  Button,
  makeStyles,
  Select,
  Grid,
  Paper,
} from "@material-ui/core";

const Register = (props) => {
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [ville, setVille] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [confirmeMotDePasse, setConfirmeMotDePasse] = useState("");
    const history = useHistory();
    const addUser = () => {
        if (motDePasse !== confirmeMotDePasse) {
          alert("vous devez saisir le même mot de passe:");
        }else if (!email.includes('@')) {
          alert("vous devez saisir un email valide");
        } else {
          Axios.post("http://localhost:3001/register", {
          prenom: prenom,
          nom: nom,
          email: email,
          telephone: telephone,
          ville: ville,
          motDePasse: motDePasse,
        }).then(() => {
          console.log("seccess")
        });
        localStorage.setItem('prenom', prenom);
        localStorage.setItem('nom', nom);
        localStorage.setItem('telephone', telephone);
        localStorage.setItem('ville', ville);
        localStorage.setItem('email', email);
        localStorage.setItem('motDePasse', motDePasse);
        setPrenom("");
        setNom("");
        setEmail("");
        setTelephone("");
        setMotDePasse("");
        setConfirmeMotDePasse("");
        props.heIsConnected();
        }
        history.push('/home');
      };
    const useStyles=makeStyles({
        input:{
            display:'block',
            marginBottom:'5%'
        }
    })
    const classes=useStyles()
    return ( 
        
            <Grid container alignItems='center' style={{Width:'40%',marginTop:'4%'}}>
                <Grid item xs={6} md={3} sm={6} key='register' style={{margin:'0px auto'}}> 
                    <TextField 
                     value={prenom}
                     onChange={(event) => {
                       setPrenom(event.target.value);
                     }}
                    className={classes.input} type='text' variant='standard' label='Prénom' name="Fname" />
                    <TextField 
                     value={nom}
                     onChange={(event) => {
                       setNom(event.target.value);
                     }}
                    className={classes.input} type='text' variant='standard' label='Nom' name="Lname" />
                    <TextField
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    className={classes.input} type='email' variant='standard' label='Email' name="mail" />
                    <TextField   
                      value={telephone}
                      onChange={(event) => {
                        setTelephone(event.target.value);
                      }}
                    className={classes.input} type='text' variant='standard' label='Telephone' name="phone" />
                    <Select
                     onChange={(event) => {
                        setVille(event.target.value);
                      }}
                    native  className={classes.input}  style={{width:'62%'}} name="city"  defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled  style={{fontWeight:'bold'}}>Choisir la  ville</option>
                        <option value="Casablanca">Casablanca</option>
                        <option value="Rabat">Rabat</option>
                    </Select>
                <TextField  
                 value={motDePasse}
                 onChange={(event) => {
                   setMotDePasse(event.target.value);
                 }}
                className={classes.input} type='password' variant='standard' label='Mot de passe'name="password" />
                <TextField
                value={confirmeMotDePasse}
                onChange={(event) => {
                  setConfirmeMotDePasse(event.target.value);
                }}
                className={classes.input} type='password'  variant='standard' label='Confirmer mot de passe' name="confirm_password"/>
                <Button 
                 onClick={addUser}
                className={classes.input} variant='contained' color='primary' style={{marginLeft:'14%'}}>S'inscrire</Button>
                </Grid>
            </Grid>
        
     );
}
 
export default Register;