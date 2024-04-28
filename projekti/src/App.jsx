import { useState, useEffect } from 'react'
import useAction from './hooks/useAction';
import './App.css'
import Navbar from './components/Navbar';
import EditModal from './components/EditModal';
import LinksPage from './LinksPage';
import ShowState from './components/ShowState';


function App() {

  const [editPressed, setEditPressed] = useAction();
  // const editPressed = true;

  const [state, setState] = useState ({
    new_User: 'JUKKA',
    new_Frame: 'TokaFormi 22',
    new_X: 100,
    new_Y: 150,
    new_Text: 'Blaa Blaa blaa',
    new_URL: 'http://yle.fi',
    new_DifX: 10,
    new_DifY: 25
  })

 function Trace1  ()  {
    console.log("TRACE 1")
  }

  console.log("============")
  console.log(editPressed.editPressed)
  console.log("=============")
  Trace1()

  if(editPressed.editPressed) {
    return (
      <>
			  <Navbar state={state} setState={setState}/> 
        <ShowState state={state} setState={setState}/>
        <LinksPage kayttaja_id="1" kayttaja="JUKKA" freimi_id ="2" freimi="TOKAFREIMI" />
      </>
    )
  } else {
    return (
      <>
			  <Navbar state={state} setState={setState}/> 
        <ShowState state={state} setState={setState} dummy="PÖÖ"/>
        <LinksPage kayttaja_id="1" kayttaja="JUKKA" freimi_id ="2" freimi="TOKAFREIMI" />
      </>
    )  
  }
}

export default App
