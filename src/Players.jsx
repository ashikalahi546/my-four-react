import { useState } from "react"

export default function Players (){
    const [player,setPlayer] = useState(11);
    const HandleClick = () =>{
        const newplayer = player + 1 ;
        if(newplayer > 20){
            alert('limit ses')
        }
        setPlayer(newplayer)
    }
    const HandleClick2 = () => {
        const removePlayer = player - 1;
        if(removePlayer >= 11){
            setPlayer(removePlayer)
        }else{
            alert('ar theke niche jawya jabe na')
        }
       
    }

    return(
        <div style={{border:'2px solid red', padding:'20px 50px', borderRadius:'20px'}}>
            <h3>Players : {player} </h3>
            <button onClick={HandleClick}>Add Player</button>
            <button onClick={HandleClick2}>Remove Player</button>
        </div>
    )
}