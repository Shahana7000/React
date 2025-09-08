import { useState } from "react";
export default function LikeButton(){
let [isLike, setIsLike] = useState(false)

let toggleLike = () =>{
  setIsLike(!isLike)
}

let likeStyles = {color : "red"}

    return(
        <div>
            <p onClick={toggleLike}>
            
               {isLike ? (
                <i className="fa-solid fa-heart" style={likeStyles}></i>
               ) : (
                <i className="fa-regular fa-heart"></i>
               )}
                    </p>

        </div>

    );
}