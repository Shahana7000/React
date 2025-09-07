function Hoverhandle(){
    console.log("button was hover")
}

function handleClick(){

    console.log("button was clicked")
}

function doubleClick(){
    console.log("button was double clicked")
}

// export default function Button(){
//     return (
//         <div>
//             <button onClick={doSomething}>click me!</button>
//         </div>
//     )
// }

export default function button(){
    return(
        <div>
            <button onClick={handleClick}>click me!</button>
            <p onMouseOver={Hoverhandle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus iusto porro atque? Laudantium, esse explicabo adipisci quia consectetur tempore ipsa sed aperiam unde! Vitae iusto dolore hic, sint distinctio eligendi!</p>
            <button onDoubleClick={doubleClick}>double click me</button>
        </div>
    )
}