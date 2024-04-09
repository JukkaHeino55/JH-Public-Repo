
const createLink = (linkki) => {

    
    stringi = '';
    return (
        <>
        <div style={{position: 'absolute', left: 70, top: 90}}> 
        <a href="{linkki.FieldURL}"><nobr>{linkki.FieldText}</nobr></a>
        </div>
       </>
    )
}

export default createLink;