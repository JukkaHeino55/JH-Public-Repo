import {Link} from 'react-router-dom';
import useAction from '../hooks/useAction';
//import useAction from '../hooks/useAction';

const EditModal = () => {
	
  const [editPressed, setEditPressed] = useAction();

  if (editPressed.editPressed) {
  return(
    <>

            <container class ="myClass bg-warning">
              <div class="form-group">
<input type="hidden" value="{editPressed.editPressed}" />

               X:  <input type="text" size="4" />
               Y:  <input type="text" size="4" />
               <p />
               Text:  <input type="text" size="50" />
               <p />
               URL: <input type="text" size="50" />
               <p />
               <button type="submit" class="btn btn-primary">Add</button>
               <button type="submit" class="btn btn-primary">Cancel</button>
              </div>

            </container>
     
    </>
  )
  } else {
    return (<>
    <input type="hidden" value="{editPressed.editPressed}" />
    </>)
  }
}

export default EditModal