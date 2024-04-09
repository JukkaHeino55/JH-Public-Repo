import {useState, useEffect} from 'react';
// import './linkDefiner';
const LinkkiX =  (
    <>
     <div style={{position: 'absolute', left: 250, top: 100}}> 
      <a href="https://iltasanomat.fi"><nobr>X-linkki</nobr></a>
     </div>
    </>
  )

  function createLink(linkki) {
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


    let linksOut = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
    return (
        <>
        <hr />
        <p />
        Teksti 1 {kayttaja}{freimi}
        <p />zzzz

        {links.map((link) => (KUTSU(link) )
        )}


        {linksOut}
  

        <p />
        {LinkkiX}

        Teksti 2
        </>
    )
}

export default LinksPage