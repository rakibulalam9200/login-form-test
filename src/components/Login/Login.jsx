import axios from "axios";
import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const [user,setUser] = useState({});

  const handleLogin = async(e) =>{
    e.preventDefault();
    setLoading(true);
    try{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        setUser(data);
        setError(false);
    }catch{
        setError(false);
    }

    setLoading(false);
  }

  return (
    <div className="container">
    <div className="user"><h2>{user.name}</h2></div>
      <form
        action=""
        style={{
          height: "800px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="username"
          value={username}
          style={{ height: "30px" }}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          style={{ height: "30px" }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          onClick={handleLogin}
          style={{ height: "30px", width: "175px" }}
          disabled={!username || !password}
        >
         {loading ? "Please wait" : "Login"} 
        </button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went Wrong!
        </span>
      </form>
    </div>
  );
};

export default Login;
