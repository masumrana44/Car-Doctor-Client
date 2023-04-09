import React from "react";
import './About.css';
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="w-1/2 relative">
          <img
            className="person-img   rounded-lg shadow-2xl    "
            src={person}
            alt=""
          />
          <img
            className=" parts-img  absolute  rounded-lg shodow-2xl  "
            src={parts}
            alt=""
          />
        </div>
        <div className="w-1/2 flex flex-col gap-8 ">
          <h3 className="font-bold text-xl text-red-400">About Us</h3>
          <h1 className="font-bold text-4xl ">
            We are qualified
            <br />
            & of experience
            <br />
            in this field
          </h1>
          <p>
            One of the key features of Car Doctor is its extensive library of
            car repair and maintenance guides. These guides provide step-by-step
            instructions for common repairs and maintenance tasks, making it
            easy for car owners to perform basic repairs and save money on
            costly mechanic fees.
          </p>
          <p>
            Car Doctor also offers a directory of local mechanics and repair
            shops. Users can search for mechanics in their area and read reviews
            from other car owners to find the best service providers for their
          </p>
          <button className="banner-btn w-3/12 ">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
