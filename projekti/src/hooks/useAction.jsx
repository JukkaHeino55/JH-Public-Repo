import {useState,useEffect} from 'react';

const useAction = () => {
	
	const [editPressed,setEditPressed] = useState({
		editPressed: true
	})
	
    return [editPressed, setEditPressed]
}

export default useAction;