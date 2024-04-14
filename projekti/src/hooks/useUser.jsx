import {useState} from 'react';

const useUser = () => {
	
	const [user,setUser] = useState({
		user: "JUKKA2"
	})
	

    return [user,setUser]
}

export default useUser;