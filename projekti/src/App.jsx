import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import LinksPage from './LinksPage';





const Linkki1 =  (
  <>
   <div><div style={{position: 'absolute', left: 100, top: 100}}> 
    <a href="https://iltasanomat.fi"><nobr>Iltasanomat</nobr></a>
   </div></div>
  </>
)

const Linkki2 =  (
  <>
 {/*  <div Style='position: absolute; left: 150px; top: 200px;'> */}
    <a href="https://iltalehti.fi"><nobr>Iltalehti</nobr></a>
 {/*  </div>  */}
 </>
)

const Linkit = () => {
  return(
    <button>Buttonxxxx</button>
  )
}

const FromServer = () => {
  const [state,setState] = useState({
    seconds:0,
    datax:''
  })


  console.log("From Server")
                  
  state.datax = "#()#()#"

  useEffect(() => {
    console.log("ennen fetciä")
    fetch('http://localhost:8080/getLinks')

    .then(response => response.json())
     .then(response => state.datax =  console.log("zz" + JSON.stringify(response)));



      
  }, []); 

  console.log("Fetcin jälkeen");
  console.log(state.datax)
  console.log("-----------------")

  return(
    <>
    <button>Serveriltä</button>
  {/*   <div>{aa}</div> */}
 {/*  <div>
     {aa.map(item => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div> */}
    </>
  )
}

function App() {

  return (
    <>
    Hello World!
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => 0 + 1)}>
          count is 0
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {Linkki1}
      {Linkki2}
      <Linkit />
      <FromServer />
      <LinksPage kayttaja_id="1" kayttaja="JUKKA" freimi_id ="2" freimi="TOKAFREIMI" />
    </>
  )
}

export default App
