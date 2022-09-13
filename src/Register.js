
import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";



export default function Register() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const[error, setError] = useState("")



let handleSubmit = async (e) => {
    e.preventDefault();

      
 
    try {
     let res = await axios("https://test.emkanfinances.net/api/auth/register",{
        method: "POST",
        data: {
          name:name,
          email:email,
          password:password,
          password_confirmation:password,
        },
        headers: {
            'content-type': 'multipart/form-data'
          }
     },);
      if (res.status === 200) {
         // storing input name
      localStorage.setItem("email", JSON.stringify(email));
      window.location.href = "/"
     
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      setError(err.response.data.errors.email);
    }
  
 }





  return (
    <><Header/>
    <div className="newUser text-center d-flex mt-5 justify-content-center mt-5">
  
      <form className="newUserForm" onSubmit={handleSubmit} encType='multipart/form-data'>
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" name="name" onChange={(e) => setName(e.target.value)} value={name} required/>
        </div>
        <div className="newUserItem"  >
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
        </div>
        <div className="newUserItem"  >
          <label>Password</label>
          <input type="password" placeholder="password" name="passowrd" onChange={(e) => setPassword(e.target.value)} value={password} required/>
        </div>
        
        <div className="newUserItem"  >
          <span>{error}</span>
        </div>
        
        <button className="newUserButton" type="submit">Register</button>
      </form>
    </div>
    </>
  );
}
