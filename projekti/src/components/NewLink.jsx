import react from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const NewLink = (props) => {

    console.log("NEWLINK")
    console.log(props)

    const style = {
        position: "absolute",
        left: 220,
        top: 150,
        zIndex: 1,
        color: "red",
        backgroundColor: "yellow"
    };
    style.left = props.props.state.new_X + "px";
    style.top = props.props.state.new_Y + "px";

    //console.log(style.left)
    //console.log(style.top)
    


      const element = (
        <>
        <div style={style}> 
        <a style={style} href={props.props.state.new_URL}><nobr>{props.props.state.new_Text}</nobr></a>
        </div>
       </>
    )

    if (props.display) {
        return(
            <>
            {element}
            </>
        )
    } else {
        return(
            <>
            PROPS DISPLAY OFF
            </>
        ) 
    }

}

export default NewLink