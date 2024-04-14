import {useState} from 'react';

const useFrame = () => {
	
	const [frame,setFrame] = useState({
		frame: "LEHDET"
	})
	

    return [frame,setFrame]
}

export default useFrame;