import React from "react";
import { concepts } from "../App";
import { Link } from "react-router-dom";


const Component = () => {
  return (
    <>
      <div className='concept' id="concepts">
        <img src={concepts[0].image} alt={concepts[0].title} />
        <h2>{concepts[0].title}</h2>
        {concepts[0].description}
      </div>
      <p id='concepts' >
        <Link to="/" style={{color: 'white', 'textDecoration': 'none'}}>Back</Link>
      </p>
    </>
  );
};

export default Component;
