import * as React from 'react';
import TextField from '@mui/material/TextField';
import './multiline.css'
import { GlobalContext } from '../Actions';

const Multiline=()=>{
  const [,,data,setData]=React.useContext(GlobalContext)

const handleChange = (event) => {
  setData(event.target.value);
};
    return (
        <div className='multiline'>
            <TextField
            style={{width:"100%"}}
        className="multline"
          id="outlined-multiline-static"
          label="Data"
          multiline
          rows={10}
          value={data}
          onChange={handleChange}
        />
        </div>
        
    )

}

export default Multiline