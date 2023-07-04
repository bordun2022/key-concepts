import React from "react";
import { concepts } from "../App";
import { Link } from "react-router-dom";

const State = () => {
  return (
    <>
      <div className='concept' id="concepts">
        <img src={concepts[1].image} alt={concepts[1].title} />
        <h2>{concepts[1].title}</h2>
        {concepts[1].description}
      </div>
      <p id='concepts' >
        <Link to="/" style={{color: 'white', 'textDecoration': 'none'}}>Back</Link>
      </p>
    </>
  );
};

export default State;
