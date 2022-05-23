import React,{useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import initialData from './data.json'
import "./style.css";

const data = initialData;

function App() {
  
  const [board, setBoard] = useState(initialData);

  function Search(name){
    console.log("search function worked", name)
    let arrayFillter = data.columns.filter((keyword,i)=>{
    console.log( keyword.title.toLowerCase().startsWith(name.target.value.toLowerCase()));
    return keyword.title.toLowerCase().startsWith(name.target.value.toLowerCase()) 
   });

  let obj = {
    columns : arrayFillter
  }
  console.log(obj)
  setBoard({...obj})
  setTimeout(() => console.log("Borad value " , board),10000)
  }

  useEffect(() =>{
    console.log('use effect called...');
    // setBoard({columns:[...data.columns,,...board.columns]})
  },[board])

  return (
   
    <div>
      <input  
        className="Search" 
        type="text" 
        placeholder="Search......" 
        onChange={Search}/>
      <h4>Columns</h4>
      <Board
      allowRemoveLane
      allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard = {board}
      children={board}
      allowAddCard={{ on: "top" }}
      onNewCardConfirm={draftCard => ({
        id: new Date().getTime(),
        ...draftCard
      })}
      onCardNew={console.log}>{board}</Board>
    </div>
    
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);