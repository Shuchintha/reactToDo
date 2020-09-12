import React,{useState,useEffect} from 'react';
import './App.css';
import { FormControl,Button,InputLabel,Input } from '@material-ui/core';
import ListOfTodoComponent from './components/ListOfTodoComponent'
import db from './firebase'
import firebase from 'firebase'

function App() {
  //after app loading, listen to data base and fetch todos also when added or removed
  const [fontChange, setFontChange] = useState("world_Color");
  const [fontBacChange, setFontBacChange] = useState("App-header");

  const [items,setItems] = useState([]);
  const [inputStr, setInputStr] = useState('');
  const input_OnChange = (event)=>{
    console.log(inputStr);
    setInputStr(event.target.value);
  }
  const addItemToDo_OnClick = (event)=>{
    event.preventDefault();

    db.collection('todos').add({
      todo: inputStr,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInputStr(''); //clear inputStr
  }
  
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setItems(snapshot.docs.map(doc=>({id: doc.id, todo: doc.data().todo})))
    })
  }, [])

  useEffect(() => {
    setTimeout(()=>{
      if(fontChange == "world_Color"){
      setFontChange("world_Color_change")
      setFontBacChange("App-header1")
    }else {
      setFontChange("world_Color")
      setFontBacChange("App-header")
    }
    },3000)
});
  return (
    <div className={fontBacChange}>
      <h1>
        <span style={{color: "Grey"}}>This</span> is <span className={fontChange}>TodoList</span> 
      </h1>
      <form>
      <FormControl>
        <InputLabel >Write a ToDo</InputLabel>
        <Input  value={inputStr} onChange={input_OnChange}/>
      </FormControl>
      <Button type='submit' disabled={!inputStr} variant='contained' color='primary' onClick={addItemToDo_OnClick}>
      Add ToDo
      </Button>

      </form>

      <ul>
        {items.map(todo=>(<ListOfTodoComponent key = {todo.id} todo ={todo} />) )}
      </ul>
    </div>
  );
}

export default App;
