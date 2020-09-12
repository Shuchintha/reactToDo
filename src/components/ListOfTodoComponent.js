import React, {useState} from 'react'
import { List, ListItemText, ListItem, ListItemAvatar, Avatar, Modal,Button} from '@material-ui/core'
import db from '../firebase.js'
import "../ListOfTodoComponent.css"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import firebase from 'firebase'


const useStyles = makeStyles((theme) => ({
    paper: {
    //   position: 'absolute',
      align: 'center',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    paperTodo: {
    //   position: 'absolute',
    //   align: 'center',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: '2px ',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    
  }));

function ListOfTodoComponent(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();
    // const handleOpen = (event) => {
    //     setOpen(true);
    // };
    
    const handleClose = () => {
        setOpen(false);
    };
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
            // timestamp: firebase.firestore.FieldValue.serverTimestamp()
        },{merge:true});
        setOpen(false);
    }
    
    return ( 
        <>
        <Modal
        open={open}
        onClose={handleClose}
        >
            <div className={classes.paper}>
            <h1>Hello this is modal</h1>
            <input placeholder={props.todo.todo} value={input} onChange={event=>setInput(event.target.value)}/>
            <EditIcon variant='contained' color='primary' onClick={updateTodo} />
            </div>
        </Modal>
        <List className={classes.paperTodo}>
            <ListItem>
            <ListItemAvatar>
                <Avatar >
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={props.todo.todo} secondary="Todo"/>
            <Button variant='contained' color='primary' onClick={event=>setOpen(true)}>Edit</Button>
            <DeleteForeverIcon variant='contained' color='primary' onClick={event=>{db.collection('todos').doc(props.todo.id).delete()}}/>
            </ListItem>
        </List>
        </>
    )
}

export default ListOfTodoComponent
