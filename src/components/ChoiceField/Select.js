import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import './Select.css'
import { useContext } from 'react';
import { GlobalContext } from '../Actions';
const ChoiceField=()=>{
    const [, , , , type,settype , ,] = useContext(GlobalContext);
    return(
        <div className='container'>
            <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={type}
          label="Type"
          onChange={(e)=>settype(e.target.value)} 
          sx={{
            width:"100%"
          }}
        >
          
          <MenuItem value={"Excel"}>Excel</MenuItem>
          <MenuItem value={"Data"}>Data</MenuItem>
        </Select>

        </div>
        
    )
}
export default ChoiceField;