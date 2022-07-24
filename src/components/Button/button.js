import * as React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { GlobalContext } from '../Actions';
const SubmitButton=(props)=>{
    
    const [key,,data,,type,,image,]=React.useContext(GlobalContext)
    const [loading,setLoading]=React.useState(false);
    
    console.log(data);
    
    const send=async()=>{
        setLoading(true);
        if(type==="Data"){
            await axios.post(`https://unrestapi.herokuapp.com/getRequest`,{
           "data":data,
           "key":key
       });
      

        }
        else{
            const data=new FormData();
            data.append('file', image);
            data.append('key', key);
            await axios.post(`https://unrestapi.herokuapp.com/excel`,data,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })

        }
        setLoading(false);   
       
    }

   
    return (
        <Button variant="contained" onClick={()=>send()} disabled={loading}>Send</Button>
        
    )

}

export default SubmitButton