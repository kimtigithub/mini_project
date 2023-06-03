import React from 'react';
    import { Link } from "react-router-dom";
    import "../App.css";
    
    function Home() {
      return (
        <div className="app">
          
          <div className="container-home">
            <div className="image-container">
              <img
                src="/assets/d0333051d24ff9adba8cc63b100016a9.png"
                height="100px"
                width="100px"
              />
            </div>
            <h1> Welcome!</h1>
            <Link to={"/Login"}>
              <button className="button1">Sign In</button>
            </Link>
            <Link to={"/Register"}>
              <button className="button1">Register</button>
            </Link>
          </div>
        </div>
      );
    }
    
    export default Home;
    

