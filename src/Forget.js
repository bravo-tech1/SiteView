import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios(
        "https://test.emkanfinances.net/api/forget-password",
        {
          method: "POST",
          data: {
            email: email,
            password: password,
            password_confirmation: password,
          },
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        // storing input name
        localStorage.setItem("email", JSON.stringify(email));
        window.location.href = "/forget/check";
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      setError("invalid Password Or username");
    }
  };

  return (
    <>
      <Header />
      <div className="newUser text-center d-flex mt-5 justify-content-center">
        <form
          className="newUserForm"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="newUserItem mt-5">
            <label>Please Enter Your Email</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <button className="newUserButton" type="submit">
            Send Email
          </button>
        </form>
      </div>
    </>
  );
}
