import React, { useEffect, useState } from "react";
import "./Services.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch(`https://car-doctor-server-seven.vercel.app/services`)
      .then((res) => res.json())
      .then((services) => setData(services));
  }, []);

  return (
    <div id='services'>
      <div className="text-center mb-5">
        <h5 className="font-semibold text-2xl text-red-600 mb-3">Service</h5>
        <h2 className="font-bold text-5xl mb-3 ">Our Service Area</h2>
        <p className=" text-slate-500">
          The Majority Have Suffered Alteration IN Some Form, By Injected
          Humour, Or Randomised
        </p>
        <p className=" text-slate-500 mb-5">
          Woreds Which Don't Look Even Slightly BElievable.
        </p>
      </div>
      <div className="services-card-container">
        {data.map((service) => (
          <Link to={`/services/details/${service._id}`} key={service?._id}>
            {" "}
            <div className="service-card rounded">
              <img className="  " src={service.img} alt="" />
              <h2 className="text-2xl font-semibold px-3 mb-2">
                {service?.title}
              </h2>
              <div className="flex items-center justify-between px-3">
                <p className="text-2xl font-semibold text-red-400 ">
                  Price: ${service?.price}
                </p>
                <FaLongArrowAltRight className=" text-red-400" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
