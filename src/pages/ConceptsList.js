import React  from "react";

const ConceptsList = ({ image, title, children }) => {
  return (
    <li className="concept">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      {children}
    </li>
  );
};

export default ConceptsList;