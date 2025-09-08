import { useState } from "react";
export default function LikeButton(){
let [isLike, setIsLike] = useState(false)

let toggleLike = () =>{
  setIsLike(!isLike)
}

    return(
        <div>
            <p onClick={toggleLike}>
            
               {isLike ? (
                <i className="fa-solid fa-heart"></i>
               ) : (
                <i className="fa-regular fa-heart"></i>
               )}
                    </p>

        </div>

    );
}