import {useState,useEffect} from 'react';

const useAction = () => {
	
	const [editPressed,setEditPressed] = useState({
		editPressed: false
	})
	


	const db_Add_NewLink = (item) => {
		console.log("=== PÄIVITYS KUTSUTTU ===")
	/*	setUrlRequest({
			url:"/api/db_Add_New_Link",
			request:{
				"method":"POST",
				"headers":{
					"Content-type":"application/json"
				},
				"body":JSON.stringify(item)
			},
			action:"add"
		}) */
	}
return [editPressed, setEditPressed, db_Add_NewLink]
}

export default useAction;