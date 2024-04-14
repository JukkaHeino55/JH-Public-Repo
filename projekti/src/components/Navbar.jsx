import {Link} from 'react-router-dom';
import useAction from '../hooks/useAction';
import useUser from '../hooks/useUser';
import useFrame from '../hooks/useFrame';
//import useAppState from '../hooks/useAppState';

const Navbar = () => {
	
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

    return(

    <nav className="navbar fixed-top navbar-default navbar-dark bg-primary">
        <p>
            User: <input type="text" name="user" value={user.user} onChange={onChangeUser}/>
            Frame: <input type="text" value={frame.frame} onChange={onChangeFrame}/>
            <button type="button" class="btn btn-success">Edit</button>
        </p>
    </nav>
    )
}

export default Navbar