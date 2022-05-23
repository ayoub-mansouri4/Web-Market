import React,{useState,useRef} from 'react';
import  {TextField,makeStyles,Button,Select} from '@material-ui/core';
import {AddPhotoAlternate,CheckCircle} from '@material-ui/icons'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {Popover} from '@material-ui/core'


const PostAdInterface = (props) => {
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
    const history=useHistory()
    const [file1, setFile1] = useState(''); // storing the uploaded file
    const [file2, setFile2] = useState(''); // storing the uploaded file
    const [file3, setFile3] = useState(''); // storing the uploaded file
    // const [ImageName,setImageName]=useState('walo');
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [city,setCity]=useState('');
    const [category,setCategory]=useState('');


    const [id_user,setId_user]=useState(-1);
  



    // storing the recived file from backend
    const [data1, getFile1] = useState({ name: "", path: "" });
    const [data2, getFile2] = useState({ name: "", path: "" });
    const [data3, getFile3] = useState({ name: "", path: "" });

    const [progress, setProgess] = useState(0); // progess bar

    const el1 = useRef(); // accesing input element
  
    const el2 = useRef(); // accesing input element
    const el3 = useRef(); // accesing input element
    const ImageInfo=(id_user,title,email,description,phone,image1,image2,image3,city,category)=>{
        axios.post('http://localhost:3001/setimage',{
            id_user:id_user,
            title:title,
            email:email,
            description:description,
            phone:phone,
            image1:image1,
            image2:image2,
            image3:image3,
            city:city,
            category:category

        }).then(
            ()=>console.log('request has been sent')
        )
   }



    const handleChange1 = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        setFile1(file); // storing file
    }
    const handleChange2 = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        setFile2(file); // storing file
    }
     const handleChange3 = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        setFile3(file); // storing file
    }


    const uploadFile1 = () => {
        const formData = new FormData();
        formData.append('file', file1); // appending file

        axios.post('http://localhost:3001/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
           // console.log(res);
            getFile1({ name: res.data.name,
                     path: 'http://localhost:3001' + res.data.path
                   })
           // ImageInfo(title,res.data.name,res.data.path)
        }).catch(err => console.log(err))
       
        
    }


    const uploadFile2 = () => {
        const formData = new FormData();
        formData.append('file', file2); // appending file

        axios.post('http://localhost:3001/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {

           // console.log(res);
            getFile2({ name: res.data.name,
                     path: 'http://localhost:3001' + res.data.path
                   })
           // ImageInfo(title,res.data.name,res.data.path)
        }).catch(err => console.log(err))
        
    }
    const uploadFile3 = () => {
        const formData = new FormData();
        formData.append('file', file3); // appending file

        axios.post('http://localhost:3001/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
           // console.log(res);
            getFile3({ name: res.data.name,
                     path: 'http://localhost:3001' + res.data.path
                   })
           // ImageInfo(title,res.data.name,res.data.path)
        }).catch(err => console.log(err))
        
    }
    const [open,setOpen]=useState(false)
    const getIdUser = () => {
        axios.post("http://localhost:3001/getId", {
            email_user : localStorage.getItem('email')
        }).then((respense) => {
            console.log(respense.data[0].id);
            setId_user(respense.data[0].id)
            localStorage.setItem("id_user",respense.data[0].id);
        })
    }
    const UploadFiles=()=>{
        uploadFile1();
        uploadFile2();
        uploadFile3();
        getIdUser();
        setOpen(true)

        //ImageInfo('jjj','mmmm','prdpr','dloo')
    }

    const confirmUploadFiles=()=>{
        ImageInfo(id_user,title,email,description,phone,data1.name,data2.name,data3.name,city,category)
        setOpen(false)

        history.push(`/editAds`)
    }
    const classes=useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

//   const open = Boolean(anchorEl);
//   const id = open ? 'simple-popover' : undefined;

    return ( 
        <React.Fragment>
             <TextField className={classes.input} variant='outlined' placeholder="Titre de l'annonce" onChange={(e)=>setTitle(e.target.value)} />
             <TextField className={classes.input} multiline rows={4}  variant='outlined' placeholder="Description de l'annonce" onChange={(e)=>setDescription(e.target.value)} />
             <TextField className={classes.input} variant='outlined' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
             <TextField className={classes.input} variant='outlined' placeholder='Numéro de téléphone' onChange={(e)=>setPhone(e.target.value)}/>
             <Select  onChange={(event) => {setCity(event.target.value)}} native className={classes.input}    style={{width:'40%',margin:'4% auto'}}  defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled  style={{fontWeight:'bold'}}> Choisir la ville</option>
                        <option value="Casablanca">Casablanca</option>
                        <option value="Rabat">Rabat</option>
                        <option value="Agadir"> Agadir</option>
                        <option value="Al Hoceima"> Al Hoceima</option>
                        <option value="Béni Mellal"> Béni Mellal</option>
                        <option value="El Jadida"> El Jadida</option>
                        <option value="Errachidia"> Errachidia</option>
                        <option value="Fès"> Fès</option>
                        <option value="Kénitra"> Kénitra</option>
                        <option value="Khénifra"> Khénifra</option>
                        <option value="Khouribga"> Khouribga</option>
                        <option value="Larache"> Larache</option>
                        <option value="Marrakech"> Marrakech</option>
                        <option value="Meknès"> Meknès</option>
                        <option value="Nador"> Nador</option>
                        <option value="Ouarzazate"> Ouarzazate</option>
                        <option value="Oujda"> Oujda</option>
                        <option value="Safi"> Safi</option>
                        <option value="Settat"> Settat</option>
                        <option value="Salé"> Salé</option>
                        <option value="Tanger"> Tanger</option>
                        <option value="Taza"> Taza</option>
                        <option value="Tétouan"> Tétouan</option>
             </Select>
             <Select   onChange={(event) => {setCategory(event.target.value)}} native defaultValue={"DEFAULT"} className={classes.input} style={{width:'40%',margin:'4% auto'}} >
                    <option value="DEFAULT" disabled>
                        Choisir la catégorie
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
              <Button className={classes.images} endIcon={<AddPhotoAlternate  className={classes.icones} /> }><TextField type="file"  ref={el1} onChange={handleChange1}  style={{opacity:'0',width:'100%'}}   title='Choisir  image 1'  variant='outlined'  /></Button>
              <Button className={classes.images} endIcon={<AddPhotoAlternate className={classes.icones} />}><TextField type="file"  ref={el2} onChange={handleChange2} style={{opacity:'0',width:'100%'}}   title='Choisir  image 2'  variant='outlined'  /></Button>
              <Button className={classes.images} endIcon={<AddPhotoAlternate className={classes.icones} />}><TextField type="file" ref={el3} onChange={handleChange3} style={{opacity:'0',width:'100%'}}   title='Choisir  image 3'  variant='outlined'  /></Button>
             <Button variant='contained' 
            //  aria-describedby={id}
              className={classes.input} style={{width:'50%',margin:'0 auto'}} onClick={UploadFiles} >Déposer l'annonce</Button>
            
                        <Popover
                                open={open}
                                // id={id}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'center',
                                }}
                                transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'center',
                                }}
                        
                            
                            >
                                    <Button onClick={confirmUploadFiles} variant='contained' color='secondary'>
                                        confirmer
                                    </Button>
                        </Popover>
               
            
        </React.Fragment>
     );
}
 
export default PostAdInterface ;