import React, { useState } from "react";
import { indiaTravelPlans } from "../plans api/Plans";
import TravelCard from "./TravelCards";
import "../Components/TravelCards.scss";
const TravelPlan = () => {
  const [plans, setplans] = useState( JSON.parse(localStorage.getItem('indiaTravelPlans')) || indiaTravelPlans);

  function removeTour(id) {
    console.log("hello");
    const newTours = plans.filter((tour) => tour.id !== id);
    setplans(newTours);
    localStorage.setItem('indiaTravelPlans', JSON.stringify(newTours));
  }
  if(plans.length===0)
  {
    return(
      <>
      <div className="refresh">
        <h2>No tour left</h2>
        <button onClick={()=>setplans(indiaTravelPlans)}>
          Refresh
        </button>
      </div>
      </>
    )
  }

  return (
    <div>
      <h1 className="heading">Travel Plans in India</h1>
      <div className="cards-container">
        {plans.map((plan) => (
          <TravelCard
            key={plan.name}
            plan={plan}
            removeTour={removeTour}
            id={plan.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TravelPlan;
