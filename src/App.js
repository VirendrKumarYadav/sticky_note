import React, {useState} from 'react'
import './App.css';
import * as ReactDOM from 'react-dom';

function App() {
let [getStickyText, setStickyText]=useState("");
let [getTime, setTime]=useState(0);
let dataSheet=[]
 const dataText=(e)=>{
  setStickyText(e.target.value)
 }
 const dataHr=(e)=>{
  setTime(e.target.value);
 }
 let main=document.querySelector('#main')
 const addStickyNotes=()=>{
const parentEle=React.createElement("div","parentStickyNotes",[
        React.createElement("h5","head_text",getStickyText),
        React.createElement("p","time",getTime),
        React.createElement("p","auther",getStickyText)
]);
dataSheet.push(parentEle);
dataSheet.forEach((a)=>{
  ReactDOM.render(a,main);
 })


 }


  return (
    <div className="App">
     <h1>Sticky Notes</h1>
     <div className="btn">
     <input type="text" placeholder="Subject" onChange={(e)=>dataText(e)} ></input>
     <input type="number" placeholder="Hour" onChange={(e)=>dataHr(e)}></input>
     <button onClick={addStickyNotes}>Add</button>
     </div>
     <div id="main" >
       
     </div>

    </div>
  );
}

export default App;
