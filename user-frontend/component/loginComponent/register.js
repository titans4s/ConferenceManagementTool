import React,{useState} from "react"
import axios from "axios"



function Register() {

    const [username , setUsernameReg] = useState("");
    const [password , setPasswordReg] = useState("");

    function register(e){
        e.preventDefault();

        const newUser = {
            username,
            password
        }

        axios.post("http://localhost:8078/user/register",newUser).then(()=>{
            alert("User Added")
        }).catch((err) =>{
            alert(err)
        })
    }
    
      return (
        <div className="App">
          <div classname = "registration">
            <h1>Registration</h1>
            <label>Username</label>
            <input type="text" onChange={(e) => {
                setUsernameReg(e.target.value);
            }}></input>
            <label>Password</label>
            <input type="text" onChange={(e) => {
                setPasswordReg(e.target.value);
            }}></input>
            <button onClick={register}>Register</button>
          </div>
        </div>
      );
    }
    
    export default Register;