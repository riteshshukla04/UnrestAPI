import * as React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { GlobalContext } from '../Actions';
const SubmitButton=(props)=>{
    
    const [key,,data,]=React.useContext(GlobalContext)
    const [loading,setLoading]=React.useState(false);
    console.log(data);
    
    const send=async()=>{
        setLoading(true);
       await axios.post(`https://unrestapi.herokuapp.com/getRequest`,{
           "data":data,
           "key":key
       });
       setLoading(false);

    }

   
    return (
        <Button variant="contained" onClick={()=>send()} disabled={loading}>Send</Button>
        
    )

}

export default SubmitButton