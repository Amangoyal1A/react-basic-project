import React, { useState } from "react";
import "../Components/TravelCards.scss";
const TravelCard = ({ plan, removeTour, id }) => {
  const [readmore, setReadmore] = useState(false);

  const description = readmore
    ? plan.monuments[0].description
    : `${plan.monuments[0].description.substring(0, 50)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={plan.monuments[0].picture} alt={plan.monuments[0].name} />
      <h3>{plan.name}</h3>
      <p>{plan.price}</p>
      <p>{plan.area}</p>
      <p>{plan.monuments[0].name}</p>
      <div className="description">
        {description}
        <span className="read-more" onClick={readmoreHandler}>
          {readmore ? `Show less` : `Read more`}
        </span>
      </div>
      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default TravelCard;
