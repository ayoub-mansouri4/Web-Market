import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import MyAccount from './Components/Dashboard/MyAccount/MyAccount';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useEffect, useState } from 'react';
import PostAd from './Components/Dashboard/PostAd/PostAd';
import ManageAds from './Components/Dashboard/ManageAds/ManageAds';
import UpdateAd from './Components/Dashboard/ManageAds/UpdateAd';


function App() {

  const [connected, setConnected] = useState(false);

  // const history = useHistory();

  useEffect(()=> {
    if (localStorage.getItem('email') !== null) {
      setConnected(true);
    }
  }, [])

  const seDeconnecter = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('motDePasse');
    localStorage.removeItem('prenom');
    localStorage.removeItem('nom');
    localStorage.removeItem('telephone');
    localStorage.removeItem('ville');
    localStorage.removeItem('id_user')
    setConnected(false);
    //props.history.replace('/');
  }
  
  const heIsConnected = () => {
    setConnected(true);
  }

  return (

    <div className="App">
      <Switch>
        <Route path="/register">
          <Register heIsConnected={heIsConnected}></Register>
        </Route>
        
        <Route path="/login">
            <Login heIsConnected={heIsConnected} ></Login>
        </Route>
        <Route path="/home">
          <Dashboard seDeconnecter={seDeconnecter}></Dashboard>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/MyAccount' >
          <MyAccount></MyAccount>
        </Route>
        <Route path='/PostAd' >
          <PostAd></PostAd>
        </Route>
        <Route path='/editAds' component={ManageAds}/>
        <Route path='/editAd/:id?/:title?/:desc?/:email?/:phone?/:ville?' component={UpdateAd}/>
      </Switch>
    </div>

  );
}

export default App;
