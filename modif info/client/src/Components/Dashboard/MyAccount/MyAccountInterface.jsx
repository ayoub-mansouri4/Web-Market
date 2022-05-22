import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import  {TextField,makeStyles,Select,Button} from '@material-ui/core'
const MyAccountInterface = () => {
    const history=useHistory()
     const storedData = localStorage.getItem('email');

     const changeUserInfo = () => {
        axios.post('http://localhost:3001/changeUserInformations',{
            nom: nom,
            prenom: prenom,
            email: email,
            ville: ville,
            numeroDeTelephone: numeroDeTelephone,
            motDePasse: motDePasse,
            storedData: storedData
        }).then(
            ()=>console.log('request has been sent')
        )
        localStorage['prenom'] = prenom;
        localStorage['nom'] = nom;
        localStorage.setItem('telephone', numeroDeTelephone);
        localStorage.setItem('ville', ville);
        localStorage['email'] = email;
        localStorage['motDePasse'] = motDePasse;
        // setNom('');
        // setPrenom('');
        // setEmail('');
        // setVille('');
        // setNumeroDeTelephone('');
        // setMotDePasse('');
        history.push('/home')
     };

  

     const [nom, setNom] = useState(localStorage.getItem('nom'));
     const [prenom, setPrenom] = useState(localStorage.getItem('prenom'));
     const [email, setEmail] = useState(localStorage.getItem('email'));
     const [ville, setVille] = useState(localStorage.getItem('ville'));
     const [numeroDeTelephone, setNumeroDeTelephone] = useState(localStorage.getItem('telephone'));
     const [motDePasse, setMotDePasse] = useState(localStorage.getItem('motDePasse'));

     const useStyles=makeStyles({
          input:{
              display:'block',
              marginBottom:'4%'
          }

      })
      const classes=useStyles()

    return ( 
        <React.Fragment>
             <TextField value={nom} onChange={(event) => {setNom(event.target.value)}} className={classes.input} variant='outlined' placeholder='Nom'/>
             <TextField value={prenom} onChange={(event) => {setPrenom(event.target.value)}} className={classes.input} variant='outlined' placeholder='Prenom'/>
             <TextField value={email} onChange={(event) => {setEmail(event.target.value)}} className={classes.input} variant='outlined' placeholder='Email'/>
             <TextField value={numeroDeTelephone} onChange={(event) => {setNumeroDeTelephone(event.target.value)}} className={classes.input} variant='outlined' placeholder='Numéro de téléphone'/>
             <Select value={ville} onChange={(event) => {setVille(event.target.value)}} native className={classes.input}    style={{width:'40%',margin:'4% auto'}} name="city"  defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled  style={{fontWeight:'bold'}}>Ville</option>
                        <option value="Casablanca">Casablanca</option>
                        <option value="Rabat">Rabat</option>
             </Select>
             <TextField  onChange={(event) => {setMotDePasse(event.target.value)}} className={classes.input} variant='outlined'placeholder='Nouveau mot de passe'/>
             <Button onClick={changeUserInfo} style={{marginBottom:'1%'}} variant='contained'>Sauvegarder les informations</Button>
        </React.Fragment>
     );
}
 
export default MyAccountInterface;