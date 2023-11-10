import React from "react";

const Card = ({ image_url, name }) => {
  return (
    <div className="card w-[300px] h-[350px] flex flex-col justify-center items-center gap-10 bg-white rounded-lg">
      <img
        src={image_url}
        alt={name}
        className="w-[250px] h-[200px] object-cover rounded-md"
      />
      <h1 className="text-center text-black text-xl font-bold">{name}</h1>
    </div>
  );
};

export default Card;
