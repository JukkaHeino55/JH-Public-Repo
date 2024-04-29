import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import React, { useState, useEffect } from 'react';
import useAction from '../hooks/useAction';
import EditModal from './EditModal';
import NewLink from './NewLink';
import { render } from 'react-dom';

const Navbar = (props) => {
    const [state,setState] = useState({
		editPressed: false
	})
    
	const setEditPressed = (arvo) => {
		setState({
			editPressed:arvo
		})
	}
    useEffect(() => {
        console.log("YEEYEEYEEYEE");
        props.setState((state) => {
            return {
                ...state,
                new_Display_NewLink: state.editPressed
            }
        })
      }, [state.editPressed]);

    console.log("GGG")

    const onChangeNew_User = (event) => {
        console.log("new_User changed")
        props.setState((state) => {
            return {
                ...state,
                new_User: event.target.value
            }
        })
    }

    const onChangeNew_Frame = (event) => {
        console.log("new_Framechanged")
        props.setState((state) => {
            return {
                ...state,
                new_Frame: event.target.value
            }
        })
    }

    console.log("######")

    const onClickEdit = (event) => {
        console.log("Clicked")

            if(state.editPressed) {
                setEditPressed(false)
            } else {
                setEditPressed(true)
            }

	}

    return(

    <nav className="navbar fixed-top navbar-default navbar-dark bg-primary">
        <p>
            User: <input type="text" name="user" value={props.state.new_User} onChange={onChangeNew_User}/>
            Frame: <input type="text" name="frame" value={props.state.new_Frame} onChange={onChangeNew_Frame}/>
            <button type="button" class="btn btn-success" onClick={onClickEdit}>Edit</button>
        </p>
        <EditModal props={props} setEditPressed={setEditPressed} display={state.editPressed}/>
        <NewLink props={props} setEditPressed={setEditPressed} display={state.editPressed}/>
    </nav>
    )
}

export default Navbar