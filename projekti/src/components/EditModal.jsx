import {Link} from 'react-router-dom';
import useAction from '../hooks/useAction';
//import useAction from '../hooks/useAction';

const EditModal = (props) => {
  let Xdisplay = false;
	if(props.display) {
		Xdisplay = props.display;
	}

  console.log("PROPSIT")
  console.log(props)

  const [editPressed, setEditPressed] = useAction();

  console.log("Edit Modal")
  console.log(Xdisplay)

  const onClickCancel = (event) => {
    console.log("Clicked")
    console.log(editPressed.editPressed)

    setEditPressed((state) => {
      Xdisplay = false;
      return {
        ...state,
        editPressed: false
      }
    })
  }

  console.log("REDRAW")

  if (Xdisplay) {
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
    return (<>
    </>)
  }
}

export default EditModal