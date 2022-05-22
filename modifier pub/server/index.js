const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "webmarket",
});

app.use(cors());
app.use(express.json());


// middle ware
app.use(express.static('public')); //to access the files in public folder
app.use(fileUpload());



app.post("/register", (req, res) => {
  const prenom = req.body.prenom;
  const nom = req.body.nom;
  const email = req.body.email;
  const telephone = req.body.telephone;
  const ville = req.body.ville;
  const motDePasse = req.body.motDePasse;
  

  db.query(
    "INSERT INTO utilisateur (prenom, nom, email, telephone, ville, motDePasse) VALUES (?, ?, ?, ?, ?, ?)",
    [prenom, nom, email, telephone, ville, motDePasse],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.get("/login", (req, res) => {
  db.query("SELECT * from utilisateur", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/changeUserInformations", (req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const email = req.body.email;
  const numeroDeTelephone = req.body.numeroDeTelephone;
  const ville = req.body.ville;
  const motDePasse = req.body.motDePasse;
  const storedData = req.body.storedData
  db.query(
    "update utilisateur set nom= ?, prenom=?, email=?, telephone=?, ville=?, motDePasse=? where email=?",
    [nom, prenom, email, numeroDeTelephone, ville, motDePasse, storedData],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("request has been sent");
      }
    }
  );
});
// -----------------------------------------------------------------------------





// file upload api
app.post('/upload', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });

})

//----------------------------------------
app.post("/setimage", (req, res) => {
  const image1 = req.body.image1;
  const image2 = req.body.image2;
  const image3 = req.body.image3;
  const title = req.body.title;
  const id_user = req.body.id_user;
  const email = req.body.email;

  // const id_user=1;
  const description = req.body.description;
  const phone = req.body.phone;
  const city = req.body.city;
  const category = req.body.category;


  db.query(
    "INSERT INTO annonces(id_user,title,description,email,phone,image1,image2,image3,ville,categorie) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [id_user,title,description,email,phone,image1,image2,image3,city,category,],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.post("/getId", (req,res) => {
  const email_user = req.body.email_user;
  db.query(
    "SELECT * FROM utilisateur WHERE email = ? ",
    [email_user],(err,result)=>{
      if(err){
          console.log(err)
      }else{
          res.send(result)
          //res.send(email_user)
      }
  });
  
})

//--------------------------------------------
app.post('/editAds',(req,res)=>{
  const id_user = req.body.id_user;
  db.query(
    "SELECT utilisateur.prenom,utilisateur.nom,annonces.id,annonces.title,annonces.email,annonces.description,annonces.ville,annonces.phone,annonces.image1,annonces.image2,annonces.image3,annonces.categorie FROM annonces,utilisateur WHERE utilisateur.id=annonces.id_user AND annonces.id_user= ? ",

    [id_user],(err,result)=>{
      if(err){
          console.log(err)
      }else{
          res.send(result)
          //res.send(email_user)
      }
  });
})

app.post('/deleteMyAd',(req,res)=>{
  const id_Ad = req.body.id_Ad;
  db.query(
     "DELETE FROM  annonces WHERE id= ? ",
    [id_Ad],(err,result)=>{
      if(err){
          console.log(err)
      }else{
           console.log("Ad was deleted")
          //res.send(email_user)
      }
  });
})

app.post('/editAd',(req,res)=>{
  const id_Ad = req.body.id_Ad;
  db.query(
    "SELECT * FROM annonces  WHERE id= ? ",

    [id_Ad],(err,result)=>{
      if(err){
          console.log(err)
      }else{
          res.send(result)
          //res.send(email_user)
      }
  });
})

app.post('/updateAd', (req, res) => {
  const id_Ad = req.body.id_Ad;
  const title = req.body.title;
  const email = req.body.email;
  const description = req.body.description;
  const phone = req.body.phone;
  const city = req.body.city;

  db.query("UPDATE annonces SET title = ?, email = ? ,description = ?,ville = ?,phone = ? WHERE id = ?", 
  [title,email,description,city,phone,id_Ad], (err,result)=>{
    if(err){
        console.log(err)
    }else{
         console.log("Ad was deleted")
        //res.send(email_user)
    }
})
})

//--------------------------search-------------------------------//

app.get('/searchResult', (req, res) => {
 
  db.query( "SELECT utilisateur.prenom,utilisateur.nom,annonces.id,annonces.title,annonces.email,annonces.description,annonces.ville,annonces.phone,annonces.image1,annonces.image2,annonces.image3,annonces.categorie FROM annonces,utilisateur WHERE utilisateur.id=annonces.id_user",  
    (err, result) => {
    if(err) {
      console.log(err)
    } else {
     res.send(result)
    }
  })
})

app.listen(3001, () => {
  console.log("your server is running on port 3001");
});