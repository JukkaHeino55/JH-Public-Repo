import {useState,useEffect} from 'react';

const useAction = () => {
	
	const [editPressed,setEditPressed] = useState({
		editPressed: false
	})
	
    return [editPressed, setEditPressed]
}

export default useAction;