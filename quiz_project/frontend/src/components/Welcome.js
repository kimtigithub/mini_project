import React from "react";
import {Link} from "react-router-dom";
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import "../App.css";

function Welcome(){
    return(
        <div className="app">
        <div className="container_welcome">
        <div className="image-container">
        <img
          src="/assets/d0333051d24ff9adba8cc63b100016a9.png"
          height="100px"
          width="100px"
        />
      </div>
      
      <h1>Quiz App</h1>

      <h3>Let's Play</h3>
      <center>
      <PsychologyAltIcon sx={{fontSize: 30}} />  <h3> General Knowledge</h3>
      </center>
      <Link to={"/Quiz_app"}>
          <button className="button1">Start</button>
        </Link>
       
      </div>
      </div>
    );
}
export default Welcome;