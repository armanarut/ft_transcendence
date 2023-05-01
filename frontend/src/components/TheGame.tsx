import React, { useEffect, useState } from "react"
import axios from "axios"
import { instance } from "./utils"

const AutoRootComponent = () => {

    const handleSubmit = async () => {

        const gemeGet = await instance.get('game', {})
        .then(data => console.log(data))
        .catch(error => console.error(error));
        let argument = "Post Game";
        const gamePost = await instance.post('game', argument)
        .then(data => console.log(data))
        .catch(error => console.error(error));
        // fetch('http://localhost:7000/game')
        // .then(response => response.json())
        // .then(data => console.log(data))
        
    }

    handleSubmit();
    return <div>posting game....</div>
}

const TheGame = () => {
    // useEffect(()=>{
        
    // }, [])
    // document.write(" end posting ");
    return AutoRootComponent();
    return <h1>THE GAME</h1>
}

export default TheGame;