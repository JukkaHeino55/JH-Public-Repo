import { useState, useEffect } from 'react'
import useAction from './hooks/useAction';
import './App.css'
import Navbar from './components/Navbar';
import EditModal from './components/EditModal';
import LinksPage from './LinksPage';
import ShowState from './components/ShowState';
import NewLink from './components/NewLink';


function App() {

  const [editPressed, setEditPressed] = useAction();
  // const editPressed = true;

  const [state, setState] = useState ({
    new_User: 'JUKKA',
    new_Frame: 'TokaFormi 22',
    new_X: 100,
    new_Y: 150,
    new_Text: 'New link',
    new_URL: 'http://yle.fi',
    new_DifX: 10,
    new_DifY: 25,
    new_Display_NewLink: true,
    new_Upd_Count: 0
  })

  function Trace1  ()  {
    console.log("TRACE 1")
  }

  console.log("============")
  console.log(editPressed.editPressed)
  console.log(state.new_Display_NewLink)
  console.log(state.new_Text)
  console.log("=============")

  if(true || state.new_Display_NewLink) {
    return (
      <>
      <Navbar state={state} setState={setState} db_Add_NewLink={state.new_Display_NewLink}/> 
      <ShowState state={state} setState={setState}/>
      <LinksPage state={state} kayttaja_id="1" kayttaja="JUKKA" freimi_id ="2" freimi="TOKAFREIMI" />
      </>
    )
  } else {
    return (
      <>
      <Navbar state={state} setState={setState} db_Add_NewLink={db_Add_NewLink}/> 
      <ShowState state={state} setState={setState}/>
      <LinksPage state={state} kayttaja_id="1" kayttaja="JUKKA" freimi_id ="2" freimi="TOKAFREIMI" />
      </>
    )  
  }
}

export default App
