import React,{useState} from 'react';
import './App.css';

function App() {
  const [items,setItems] = useState(["Start the application","Do the features","Finish the application"]);
  const [inputStr, setInputStr] = useState('')
  const input_OnChange = function(event){
    console.log(event.target.value)
    setInputStr(event.target.value)
  }
  const addItemToDo_OnClick = function(){
    console.log("hey"+toString(inputStr))
  }
  
  return (
    <div className="App">
      <h1>Hello world its Todo List{1+9}</h1>
      <input value={inputStr} onChange={input_OnChange}/>
      <button onClick = {addItemToDo_OnClick}>Add ToDo</button>
      <ul>
      {items.map(todo=>{return <li>{todo}</li>})}
      </ul>
    </div>
  );
}

export default App;
