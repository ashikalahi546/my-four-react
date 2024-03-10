import { useState } from "react"

export default function Counter (){
    const [count,setCount] = useState(0) 
    const Handle = () => {
   const newCount = count + 1;
   setCount(newCount) 
    }

    const Handle2 = () =>{
        const remove = count -1;
        if(remove >= 0){
       
            setCount(remove)
        }
      
     
    }
    return(
        <div>
            <h2>Counter : {count} </h2>
            <button onClick={Handle}>Add</button>
            <button onClick={Handle2}>remove</button>
        </div>
    )
}