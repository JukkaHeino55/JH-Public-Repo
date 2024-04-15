import {Link} from 'react-router-dom';
import ReactDOM from "react-dom";
import React, { useState, useEffect } from 'react';
import useAction from '../hooks/useAction';
import useUser from '../hooks/useUser';
import useFrame from '../hooks/useFrame';
import EditModal from '../components/EditModal';
import { render } from 'react-dom';
//import useAppState from '../hooks/useAppState';

const Navbar = () => {
	
    const [editPressed, setEditPressed] = useAction();
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
        console.log(editPressed.editPressed)

		setEditPressed((state) => {
            if(editPressed.editPressed) {
                return {
                    ...state,
                    editPressed: false
                }
            } else {
			    return {
                   ...state,
                   editPressed: true
			    }
            }
		})
	}

    return(

    <nav className="navbar fixed-top navbar-default navbar-dark bg-primary">
        <p>
            User: <input type="text" name="user" value={user.user} onChange={onChangeUser}/>
            Frame: <input type="text" name="frame" value={frame.frame} onChange={onChangeFrame}/>
            <button type="button" class="btn btn-success" onClick={onClickEdit}>Edit</button>
        </p>
        <EditModal display={editPressed.editPressed}/>
    </nav>
    )
}

export default Navbar