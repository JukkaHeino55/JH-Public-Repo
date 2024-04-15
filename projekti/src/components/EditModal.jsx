import {Link} from 'react-router-dom';
import useAction from '../hooks/useAction';
import {useState,useEffect} from 'react';

const EditModal = (props) => {

	const [state,setState] = useState({
		firstname:"",
		lastname:""
	})


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
               X:  <input type="text" size="4" />
               Y:  <input type="text" size="4" />
               <p />
               Text:  <input type="text" size="50" />
               <p />
               URL: <input type="text" size="50" />
               <p />
               <button type="submit" class="btn btn-primary">Add</button>
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