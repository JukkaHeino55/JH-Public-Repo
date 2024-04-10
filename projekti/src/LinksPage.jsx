import {useState, useEffect} from 'react';
// import './linkDefiner';
const LinkkiX =  (
    <>
     <div style={{position: 'absolute', left: 250, top: 100}}> 
      <a href="https://iltasanomat.fi"><nobr>X-linkki</nobr></a>
     </div>
    </>
  )

  function linkElements (link) {
    const url = link.FieldURL;

    switch (link.FieldType) {
        case 'LINKKI':
            return(
               <a href={url}>{link.FieldText}</a>
             )
        case 'LINKKI1':
            return(
                "NOT DONE YET"
            )
        default:
            return(
                "ERROR!!!"
            )

    
    }
  }
  
  function createLink(link)
 {

    const divStyle = {
        position: "absolute",
        left: "0px",
        top: "0px"
    }
    divStyle.left = link.FieldPosX;  // + px
    divStyle.top = link.FieldPosY;
    const divKey = link.FieldID;

    const linkki = linkElements(link)

    return(
        <div key={divKey} style={divStyle}>
        {linkki}
        </div>
    )
 }  
 
 function createLinkVarma(linkki) {
    const aa = "50"
    const x = linkki.FieldPosX;
    const y = linkki.FieldPosY.toString();
    console.log("X = " + x)
    const element = 
        <>
      <div style={{position: 'absolute', left: {x}, top: {y}}}>
         <a href="jjjjjj"><nobr>{linkki.FieldText}</nobr></a>
      </div> 
      </>;
    console.log(element);
    return element
  }


function KUTSU(link) {
    return ( <>
        {createLink(link)}
        </>  ) 
    // return LinkDefiner.linkDefiner(link)
    // return "XXX" + link.FieldText + "XXX"
}

const LinksPage = (props) => {
    let kayttaja_id = 0;
    let kayttaja = '';
    let freimi_id = 0;
    let freimi = '';
    if(props.kayttaja_id) kayttaja_id = props.kayttaja_id;
    if(props.kayttaja) kayttaja = props.kayttaja;
    if(props.freimi_id) freimi_id = props.freimi_id;
    if(props.freimi) freimi = props.freimi;
    const [links, setLinks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/getLinks')
        .then((res) => {
            return res.json();
            
        })
        .then((data) => {
            console.log(data);
            setLinks(data);
        });
    },[]);


    return (
        <>

        {links.map((link) => (KUTSU(link) )
        )}

        </>
    )
}

export default LinksPage