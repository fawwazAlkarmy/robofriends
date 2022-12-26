import React from "react";

const Card = ({ robot }) => {
  return (
    <div className="tc bg-light-gray dib br4 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${robot.id}`} alt="robots" />
      <div>
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  );
};

export default Card;
