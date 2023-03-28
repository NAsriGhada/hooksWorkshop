import React from "react";

const PetCard = ({ el }) => {
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={el.photo} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">Name: {el.name}</p>
              <p className="card-text">Race: {el.race}</p>
              <p className="card-text">Type:{el.type}</p>
              <p className="card-text">Location: {el.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
