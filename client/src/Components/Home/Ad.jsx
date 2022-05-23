import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Delete,Edit} from '@material-ui/icons'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '80%',
    margin:'0 auto'

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  img:{
      width:'33%',
      height:'200px',
      display:'inline',
      objectFit:'contain'
  }
  ,
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Ad(props) {
  const history=useHistory()
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  
  return (
    <Card className={classes.root}>
         

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           {props.prenom[0]}
          </Avatar>
        }
       
        title={props.prenom+' '+props.nom}
        subheader={'Ville'+' : '+props.ville+' | Titre : '+props.titre+' | Catégorie : '+props.category}
      />
    
       <img className={classes.img}  src={`http://localhost:3001/${props.image1}`}/>
       <img  className={classes.img} src={`http://localhost:3001/${props.image2}`}/>
       <img className={classes.img} src={`http://localhost:3001/${props.image3}`}/>

      {/* <CardMedia
        className={classes.media}
        image={`http://localhost:3001/${props.image1}`}
        title="Web Market"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

       
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Email : {props.email}</Typography>
          <Typography paragraph>
            Téléphone : {props.phone}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}



