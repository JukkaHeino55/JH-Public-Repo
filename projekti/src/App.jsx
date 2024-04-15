import { useState, useEffect } from 'react'
import useAction from './hooks/useAction';
import './App.css'
import Navbar from './components/Navbar';
import EditModal from './components/EditModal';
import LinksPage from './LinksPage';


function App() {

  const [editPressed, setEditPressed] = useAction();
  // const editPressed = true;

  console.log("============")
  console.log(editPressed.editPressed)
  console.log("=============")

  if(editPressed.editPressed) {
    return (
      <>
			  <Navbar /> 
        <LinksPage kayttaja_id="1" kayttaja="JUKKA" freimi_id ="2" freimi="TOKAFREIMI" />
      </>
    )
  } else {
    return (
      <>
			  <Navbar /> 
        <LinksPage kayttaja_id="1" kayttaja="JUKKA" freimi_id ="2" freimi="TOKAFREIMI" />
      </>
    )  
  }
}

export default App
