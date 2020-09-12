import React from 'react'
import { List, ListItemText, ListItem, ListItemAvatar, Avatar } from '@material-ui/core'
import "../ListOfTodoComponent.css"
function ListOfTodoComponent(props) {
    return (
        <List className="todo_list">
        <ListItem>
        <ListItemAvatar>
        <Avatar>
        </Avatar>
        </ListItemAvatar>

        <ListItemText primary={props.item} secondary="Todo"/>
        </ListItem>
        </List>
    )
}

export default ListOfTodoComponent
