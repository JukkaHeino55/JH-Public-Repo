import {Link} from 'react-router-dom';
//import useAction from '../hooks/useAction';
//import useAppState from '../hooks/useAppState';

const EditModal = () => {
	

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
               <button type="submit" class="btn btn-primary">Cancel</button>
              </div>

            </container>
     
    </>
    )
}

export default EditModal