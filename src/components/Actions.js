import * as React from 'react';


export const GlobalContext=React.createContext();

export const GlobalProvider=(props)=>{
    const [value, setValue] = React.useState(Math.random().toString(36).slice(2));
    const [data,setData]=React.useState()
    const [type,settype]=React.useState("Data")
    const [image,setImage]=React.useState()
    return(
        <GlobalContext.Provider value={[
            value,
            setValue,
            data,setData,
            type,settype,
            image,setImage
        ] }> 
            {props.children}
        </GlobalContext.Provider>
    )

}
