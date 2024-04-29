import {Link} from 'react-router-dom';
import useAction from '../hooks/useAction';
import {useState,useEffect} from 'react';

const EditModal = (props) => {

  const [urlRequest,setUrlRequest] = useState({
		url:"",
		request:{},
		action:""
	})

  const onChangeNew_X = (event) => {
    console.log("Jotakin")
    console.log(props.props.state)
    props.props.setState((state) =>  {
      return {
        ...props.props.state,
        new_X: event.target.value
      }
    })
  } 

  const onChangeNew_Y = (event) => {
    props.props.setState((state) =>  {
      return {
        ...props.props.state,
        new_Y: event.target.value
      }
    })
  } 

  const onChangeNew_Text = (event) => {
    props.props.setState((state) =>  {
      return {
        ...props.props.state,
        new_Text: event.target.value
      }
    })
  } 
  const onChangeNew_URL = (event) => {
    props.props.setState((state) =>  {
      return {
        ...props.props.state,
        new_URL: event.target.value
      }
    })
  } 

  useEffect(() => {
    const fetchData = async () => {
			if(!urlRequest.url) {
				return;
			}
			const response = await fetch(urlRequest.url,urlRequest.request);
			if(!response) {
				console.log("Server gave no response!");
				return;
			}
			if(response.ok) {
				switch(urlRequest.action) {
          case "insertLink":
					case "add":
					case "remove":
					case "edit":
//						getList();
						return;
					default:
						return;
				}
			} else {
				console.log("Server responded with a status "+response.status+" "+response.statusText)
			}
		}

    fetchData();
  }, [urlRequest])

  const add_Link  = (item) => {
    console.log("OnClick function executed START")
    const data = {
      X: 10,
      Y: 150,
      Text:"YLE",
      URL:"http://www.yle.fi"
    }

		setUrlRequest({
			url:"http://localhost:8080/insertLink",
			request:{
				"method":"POST",
				"headers":{
					"Content-type":"application/json"
				},
				"body":JSON.stringify({data})
			},
			action:"add"
		})
    console.log("OnClick function executed END")
	}

  console.log("PROPSIT")
  console.log(props)

 
  console.log("======XXXX============")
  console.log("PROPSIT")
  console.log(props)
  console.log("======XXXX============")

  const onClickCancel = (event) => {
    event.preventDefault();
    console.log("Clicked");
    props.setEditPressed(false);

   }


  console.log("REDRAW")

  if (props.display) {
  return(
    <>

            <container class ="myClass bg-warning">
              <div class="form-group">
               X:  <input type="text" 
                   size="4" 
                   value={props.props.state.new_X}
                   onChange={onChangeNew_X}/>
               Y:  <input type="text" 
                   size="4" 
                   value={props.props.state.new_Y}
                   onChange={onChangeNew_Y}/>
               <p />
               Text: <input type="text" 
                   size="50" 
                   value={props.props.state.new_Text}
                   onChange={onChangeNew_Text}/>
               <p />
               URL: <input type="text" 
                  size="50" 
                  value={props.props.state.new_URL}
                   onChange={onChangeNew_URL}/>
               <p />
                  <button type="submit" class="btn btn-primary" onClick={add_Link}>Add</button>
                  <button type="submit" class="btn btn-primary" onClick={onClickCancel}>Cancel</button>
              </div>
            </container>
     
    </>
  )
  } else {

    //props.setEditPressed(false);

    return (<></>)
  }
}


export default EditModal