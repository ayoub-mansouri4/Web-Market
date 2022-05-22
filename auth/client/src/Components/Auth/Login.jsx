import React,{useState} from "react";
import { TextField,Button,makeStyles,Grid,Typography,Paper } from "@material-ui/core";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [motDePasse, setMotDePasse] = useState("");
    const [usersList, setUsersList] = useState([]);
    const history = useHistory();
  
    const connectUser = () => {
      Axios.get("http://localhost:3001/login").then((response) => {
        response.data.map((data) => {
          if (data.email === email && data.motDePasse === motDePasse) {
            localStorage.setItem("prenom", data.prenom);
            localStorage.setItem("nom", data.nom);
            localStorage.setItem("telephone", data.telephone);
            localStorage.setItem("ville", data.ville);
            localStorage.setItem("email", data.email);
            localStorage.setItem("motDePasse", motDePasse);
            setEmail("");
            setMotDePasse("");
            props.heIsConnected();
            history.push("/home");
          }
        });
      });
    };
    console.log(usersList);
    const useStyles=makeStyles({
        input:{
            display:'block',
            marginBottom:'5%'
        }
    })
    const classes=useStyles()
    return (  
        <React.Fragment>
            <Grid container alignItems='center' style={{Width:'40%',marginTop:'13%'}}>
                <Grid item xs={6} md={3} sm={6} key='register' style={{margin:'0px auto'}}> 
                    <TextField 
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    className={classes.input} type='email' variant='standard' label='Email' name='mail'/>
                    <TextField  
                    value={motDePasse}
                    onChange={(event) => {
                      setMotDePasse(event.target.value);
                    }}
                    className={classes.input} type='password' variant='standard' label='Mot de passe' name='password'/>
                    <Button 
                    onClick={connectUser}
                    className={classes.input} variant='contained' color='primary' style={{marginLeft:'8%'}}>se connecter</Button>
                    <Link to='/register' style={{color:'#2acaea'}}>
                        <Typography variant='h6' style={{marginLeft:'19%'}}>
                              S'inscrire
                        </Typography>
                       
                        </Link>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
 
export default Login;