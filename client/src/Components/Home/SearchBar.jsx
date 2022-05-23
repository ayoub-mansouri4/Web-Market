import React, { useState } from "react";
import { InputBase, Button, Select,Grid } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import axios from "axios";
import Ad from "./Ad";

const SearchBar = () => {
  const [nameToSearch, setNameToSearch] = useState("");
  const [targetedCategory, setTargetedCategory] = useState("");

  const [Ads, setAds] = useState([]);

  axios
  .get("http://localhost:3001/searchResult")
  .then((response) => {
    //console.log(response.data);
    setAds(response.data);
  });

  console.log(targetedCategory)
  return (
    <React.Fragment>
      <Grid container direction='column'  alignItems='center'>
            <Grid item md={12} xs={12} >
      <div
        style={{
          marginTop: "20%",
          padding: "10px",
          border: "1px solid #808a8a",
          borderRadius: "5px",
          textAlign:'center'
        }}
      >
        <InputBase
          value={nameToSearch}
          onChange={(event) => {
            setNameToSearch(event.target.value);
          }}
          type="search"
          placeholder="Chercher ici"
          style={{ textAlign: "center" }}
        />
        <Select native defaultValue={"DEFAULT"} onChange={(e)=>setTargetedCategory(e.target.value)}>
          <option value="DEFAULT" disabled>
            Toutes les catégories
          </option>
                    <option value="INFORMATIQUE ET MULTIMEDIA" >-- INFORMATIQUE ET MULTIMEDIA --</option>
                    <option value="VEHICULES" >-- VEHICULES --</option>
                    <option value="IMMOBILIER" >-- IMMOBILIER --</option>
                    <option  value="HABILLEMENT ET BIEN ETRE" >-- HABILLEMENT ET BIEN ETRE --</option>
                    <option value="LOISIRS ET DIVERTISSEMENT" >-- LOISIRS ET DIVERTISSEMENT --</option>
                    <option  value="EMPLOI ET SERVICES" >-- EMPLOI ET SERVICES --</option>
                    <option  value="ENTREPRISES" >-- ENTREPRISES --</option>
                    <option  value="Autres" >-- Autres --</option>
        </Select>
        {/* <Button onClick={getSearchResult} style={{ color: "black" }}>
          <SearchOutlined />
        </Button> */}
      </div>
            </Grid>
      </Grid>
      <Grid container direction='column' alignItems='center' style={{margin:'30px auto 0 auto'}}  >
          {
              Ads.map((elt)=>{
                if((elt.title.toLowerCase().search(nameToSearch.toLowerCase()))>=0 && (elt.categorie.search(targetedCategory))>=0){
                  return(
                      <Grid item md={12} style={{margin:'0 0 10px 0'}}  key={elt.id}  >              
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
              );}
                  })
          }
             </Grid> 
         
    </React.Fragment>
  );
};

export default SearchBar;