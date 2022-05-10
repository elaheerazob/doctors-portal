import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-5">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          accusantium, corporis cupiditate nihil facere modi ipsa maiores non
          veniam repellendus
        </p>
      </div>
      <div className="flex items-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
            <img src={review.img} />
          </div>
        </div>
        <div>
            <h2 className="text-xl">{review.name} </h2>
            <p className="text-xl">{review.location} </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
