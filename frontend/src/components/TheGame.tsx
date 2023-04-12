import React, { useEffect } from "react"
import axios from "axios"


const send = async () =>{
    try
    {
        const res = await axios.get('http://localhost:7000/user/hello', {});
        console.log(res);
        
    }
    catch(error)
    {
        console.log(error);
        
    }
    

} 
const TheGame = () => {
    useEffect(()=>{
        send();
    }, [])
    return <h1>THE GAME</h1>
}

export default TheGame;