function handleFormSubmit(event){
    event.preventDefault();
    console.log("submitted form")
}

export default function FormS(){
    return(
        <div>
        <form onSubmit={handleFormSubmit}>
            <input placeholder="write something"></input>
            <button onClick={handleFormSubmit}>click me!</button>
        </form>
        </div>
    )
}