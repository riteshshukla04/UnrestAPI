import * as React from 'react';
import TextField from '@mui/material/TextField';
import './urlbar.css'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { GlobalContext } from '../Actions';

const Urlbar=()=>{

    const [key,setKey,,,type]=React.useContext(GlobalContext)
    const urlarea=React.useRef(null)

    const copytoClipboard=()=>{
       if(type==="Data"){
        navigator.clipboard.writeText(`https://unrestapi.herokuapp.com/${key}`);
       }
       else{
        navigator.clipboard.writeText(`https://unrestapi.herokuapp.com/excel/${key}`);
       }
        
        
    }
    const handleChange = (event) => {
      setKey(event.target.value);
};
    return (
        <div className='multiline'>
            <TextField
            style={{width:"100%",color:"black"}}
            
        className="multline"
          id="outlined-multiline-static"
          label="URLBAR"
          multiline
          rows={1}
          ref={urlarea}
          value={type==="Data"?`https://unrestapi.herokuapp.com/${key}`:`https://unrestapi.herokuapp.com/excel/${key}`}
          onChange={handleChange}
          disabled={true}
          InputProps={{
            endAdornment: <InputAdornment position="start">
                <IconButton onClick={()=>copytoClipboard()}><ContentCopyIcon/></IconButton>
            </InputAdornment>,
          }}
        />
        </div>
        
    )

}

export default Urlbar