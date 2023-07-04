import React from "react";
import { concepts } from "../App";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <>
      <div className='concept' id="concepts">
        <img src={concepts[2].image} alt={concepts[2].title} />
        <h2>{concepts[2].title}</h2>
        {concepts[2].description}
      </div>
      <p id='concepts' >
        <Link to="/" style={{color: 'white', 'textDecoration': 'none'}}>Back</Link>
      </p>
    </>
  );
};

export default Events;
