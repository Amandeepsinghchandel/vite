
import { useState } from "react";

 const Ludo = () => {
    
        let [move, setMove] = useState({redMove:0, greenMove:0, yellowMove:0, blueMove:0});
        
    
       let handleRedMove = () =>{
        console.log(`RedMove: ${move.redMove}`)
        setMove((prevRedMove)=>{
            return {
             ...prevRedMove,
                redMove: prevRedMove.redMove + 1
            }
        })
    
        ;
       }
    
    
       let handleGreenMove = ()=>{
       // setMove((prevGreenMove)=>{
         //   return{
           //     ...prevGreenMove,
          //       greenMove: prevGreenMove.greenMove + 1
          //  };
       // });

       setArr([...Array,"Red Moved"])
       console.log(arr)

       };
    


  return (
    <div >
        <div>
        <h3>just start the game</h3>
        <p className="mt-5">blue move: 0</p>
        <button className="rounded-lg bg-blue-500" onClick={inc}>+1
        </button>
        <p className="mt-5">yellow move: 0</p>
        <button className="rounded-lg bg-yellow-500" onClick={inc}> +1
        </button>
        <p className="mt-5">red move: 0</p>
        <button className="rounded-lg bg-red-500" onClick={inc}>+1
        </button>
        <p className="mt-5">green move: 0</p>
        <button className="rounded-lg bg-green-500" onClick={inc}>+1
        </button>
    </div>
    </div>
  );
};

export default Ludo;
