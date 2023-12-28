import React, { useState } from 'react'
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './compo/Header/Header'
import Footer from './compo/Footer/Footer'

function App() {
  let localStorageData = () => {
    let data = JSON.parse(localStorage.getItem("Items"));
    return data || [];
  }

  const [getStickyText, setStickyText] = useState("");
  const [getTime, setTime] = useState(0);
  const [getItemList, setItemList] = useState(localStorageData());

  const dataText = (e) => {
    setStickyText(e.target.value)
  }
  const dataHr = (e) => {
    setTime(e.target.value);
  }


  // -------Add stickies Notes ----------------//
  const addStickyNotes = () => {
    console.log(getTime, getStickyText, getItemList);
    if (getStickyText === "" && getTime === 0) {
      // alert("How do I create a blank space? Populate it before proceeding!")
      toast.error("How do I create a blank space? Populate it before proceeding!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.success("Stickey note added sucessfully !", {
        position: toast.POSITION.TOP_RIGHT,
      })
      return (
        setItemList(() => {
          let subList = [...getItemList, {
            Item_text: getStickyText,
            Item_time: getTime
          }]
          localStorage.setItem('Items', JSON.stringify(subList));
          return subList;
        })

      )
      setStickyText("")
      setTime(0)
    }
  }


  // ----------Delete Functions-----------------
  function delSubject(idx) {
    getItemList.splice(idx, 1);
    setItemList([...getItemList]);
    localStorage.setItem('Items', JSON.stringify([...getItemList]));
    toast.success("Note Deleted Sucessfully !", {
      position: toast.POSITION.TOP_RIGHT,
    })
  }





  return (
    <div className="App">
      <Header></Header>
      <div>
        <h1>Sticky Notes</h1>
        <div className="btn">
          <input type="text" placeholder="Subject" onChange={(e) => dataText(e)} ></input>
          <input type="number" placeholder="Hour" onChange={(e) => dataHr(e)}></input>
          <button onClick={addStickyNotes}>Add</button>
        </div>
        <div id="main" >
          <p
            className='banner_nodata'
            style={{ display: getItemList.length === 0 ? 'block' : 'none' }}>No Notes Till Now !</p>
          {
            getItemList.map((subject, idx) => {

              return (
                <div className="subContainer">
                  <h3>{subject.Item_text}</h3>
                  <p contenteditable="true"
                  >{subject.Item_time} <span>Hours</span></p>
                  <div className="btns">
                    <button
                      className='del'
                      style={{ backgroundColor: "#FCA9D3" }}
                      title="Delete The Planner"
                      onClick={(e) =>
                        delSubject(idx)
                      }
                    >Delete</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
      <ToastContainer />

    </div>
  );
}

export default App;
