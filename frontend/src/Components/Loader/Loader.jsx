import { CircularProgress } from "@mui/material";
import React from "react";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="loadingPage">
      <CircularProgress style={{"width":"150px","height":"150px"}}/>
      {/* <div className="loadingCircle"></div> */}
    </div>
  );
};

export default Loader;
