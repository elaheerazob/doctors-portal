import React from "react";
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from "./Service";

const Services = () => {
    const data =[
        {
            _id: 1,
            name: "Fluoride Treatment",
            describtion: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            describtion: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            describtion: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        }
    ]
  return (
    <div>
      <div className="text-center my-28">
        <h1 className="text-primary text-2xl font-bold">OUR SERVICES</h1>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            data.map(service => <Service key={service._id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
