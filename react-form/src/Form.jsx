import { useState } from "react"

export default function Form(){
    let [fullname, setFullName] = useState();
    let [username, setUserName] = useState()

    let handleNameChange = (event) =>{
        setFullName(event.target.value);
    }

    let handleUserName = (event) =>{
        setUserName(event.target.value);
    }
    return(
        <form>
            <label htmlFor="Full Name">Full Name</label>
            <input placeholder="enter your name" type="text" value={fullname} onChange={handleNameChange} id="Full Name"/>
            <br></br>
            <br></br>
            <label htmlFor="username">User Name</label>
            <input placeholder="enter your name" type="text" value={username} onChange={handleUserName} id="username"/>
            <button>Submit</button>
        </form>
    )
}