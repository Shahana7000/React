import { useState } from "react"

export default function Form(){
   let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: ""
   })
    // let handleNameChange = (event) =>{
    //     setFullName(event.target.value);
    // }

    // let handleUserName = (event) =>{
    //     setUserName(event.target.value);
    // }

    let handleInputChange = (event) =>{
        setFormData((currData) =>{
            return{...currData,
                [event.target.name] :event.target.value
            }
        })
    } 

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData)
        setFormData({
             fullName: "",
             username: "",
             password: ""

        })
    } 
    return(
        <form onSubmit={handleSubmit}> 
            <label htmlFor="Full Name">Full Name</label>
            <input placeholder="enter your name" type="text" value={formData.fullName} onChange={handleInputChange} id="Full Name" name="fullName"/>
            <br></br>
            <br></br>
            <label htmlFor="username">User Name</label>
            <input placeholder="enter your name" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"/>

            <br></br>
            <br></br>
            <label htmlFor="password">Password</label>
            <input placeholder="enter your password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password"/>
            <button>Submit</button>
        </form>
    )
}