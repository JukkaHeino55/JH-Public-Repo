import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import React, { useState, useEffect } from 'react';
import useAction from '../hooks/useAction';
import useUser from '../hooks/useUser';
import useFrame from '../hooks/useFrame';
import EditModal from './EditModal';
import { render } from 'react-dom';
//import useAppState from '../hooks/useAppState';

const Navbar = () => {

    const [state,setState] = useState({
		editPressed: false
	})

	const setEditPressed = (arvo) => {
		setState({
			editPressed:arvo
		})
	}
	
    const [user,setUser] = useUser();
    const [frame,setFrame] = useFrame();
    // const [userAndFrame] = useAction();

    console.log("######")
    console.log(user.user)

    const onChangeUser = (event) => {
		setUser((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}

    const onChangeFrame = (event) => {
		setFrame((state) => {
			return {
                ...state,
				[event.target.name]:event.target.value
			}
		})
	}

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
            User: <input type="text" name="user" value={user.user} onChange={onChangeUser}/>
            Frame: <input type="text" name="frame" value={frame.frame} onChange={onChangeFrame}/>
            <button type="button" class="btn btn-success" onClick={onClickEdit}>Edit</button>
        </p>
        <EditModal setEditPressed={setEditPressed} display={state.editPressed}/>
    </nav>
    )
}

export default Navbar