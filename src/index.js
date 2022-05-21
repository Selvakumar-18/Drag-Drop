import React,{useEffect, useState} from "react";
import ReactDOM from "react-dom";
import Board from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import "./styles.css";

const data = {
  columns: [
    {
      id: 1,
      title: "Design",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content"
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content"
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content"
        }
      ]
    },
    {
      id: 2,
      title: "Devlopment",
      cards: [
        {
          id: 9,
          title: "Card title 4",
          description: "Card content"
        }
      ]
    },
    {
      id: 3,
      title: "Testing",
      cards: [
        {
          id: 10,
          title: "Card title 5",
          description: "Card content"
        },
        {
          id: 11,
          title: "Card title 6",
          description: "Card content"
        }
      ]
    },
    {
      id: 4,
      title: "Support",
      cards: [
        {
          id: 12,
          title: "Card title 7",
          description: "Card content"
        },
        {
          id: 13,
          title: "Card title 8",
          description: "Card content"
        }
      ]
    }
  ]
};


function UncontrolledBoard(props) {
  useEffect(() =>{
    console.log(board,'dsd');
  },[board])
  const {board} = props
  return (
    <Board
      allowRemoveLane
      allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board}
      allowAddCard={{ on: "top" }}
      onNewCardConfirm={draftCard => ({
        id: new Date().getTime(),
        ...draftCard
      })}
      onCardNew={console.log}
    />
  );
}

function App() {
  const [board, setBoard] = useState({
    columns: [
      {
        id: 1,
        title: "Design",
        cards: [
          {
            id: 1,
            title: "Card title 1",
            description: "Card content"
          },
          {
            id: 2,
            title: "Card title 2",
            description: "Card content"
          },
          {
            id: 3,
            title: "Card title 3",
            description: "Card content"
          }
        ]
      },
      {
        id: 2,
        title: "Devlopment",
        cards: [
          {
            id: 9,
            title: "Card title 4",
            description: "Card content"
          }
        ]
      },
      {
        id: 3,
        title: "Testing",
        cards: [
          {
            id: 10,
            title: "Card title 5",
            description: "Card content"
          },
          {
            id: 11,
            title: "Card title 6",
            description: "Card content"
          }
        ]
      },
      {
        id: 4,
        title: "Support",
        cards: [
          {
            id: 12,
            title: "Card title 7",
            description: "Card content"
          },
          {
            id: 13,
            title: "Card title 8",
            description: "Card content"
          }
        ]
      }
    ]
  });

  function Search(name){
    console.log("search function worked", name)
    let arrayFillter = data.columns.filter((keyword,i)=>{
    console.log( keyword.title.toLowerCase().startsWith(name.target.value.toLowerCase()));
    return keyword.title.toLowerCase().startsWith(name.target.value.toLowerCase()) 
   });
  console.log(arrayFillter)
  setBoard({columns:arrayFillter})
  }

  return (
   
    <div>
      <input  
        className="Search" 
        type="text" 
        placeholder="Search......" 
        onChange={Search}/>
      <h4>Columns</h4>
      <UncontrolledBoard board={board} />
    </div>
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
