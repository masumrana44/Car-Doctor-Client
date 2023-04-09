import React from "react";
import "./Services.css";
import { Link, useLoaderData } from "react-router-dom";
import bottomBanner from "../../../assets/images/banner/2.jpg";
import { FaPushed, FaYoutube } from "react-icons/fa";

const ServicesDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <header className="sd-header-banner mb-10 relative ">
        <h1 className="font-bold text-white text-5xl  absolute top-52 left-1/3 ">
          {data?.title} Services
        </h1>
      </header>

      <div className="sd-content-container">
        <div className="first-col">
          <img src={data.img} alt="" className="mb-10" />
          <p>{data?.description}</p>
          <div className="facilites-card-container">
            {data?.facility.map((singlefc, index) => (
              <div key={index} className="facility-card p-10  ">
                <h3 className="text-2xl font-semibold  mb-3 ">
                  {singlefc?.name}
                </h3>
                <p>{singlefc?.details}</p>
              </div>
            ))}
          </div>
          <p className="mt-10">{data?.description}</p>
          <div className="mt-10">
            <h2 className="text-4xl  font-bold mb-5">
              3 Simple Steps to Process
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text
            </p>
            <div className="step-container">
              <div className="border step">
                <div className="step-round-first bg-red-200">
                  <div className="step-round-second bg-red-500">
                    <h1 className="text-3xl font-bold text-white ">01</h1>
                  </div>
                </div>
                <h2 className="text-3xl  font-bold mt-2 ">STEP ONE</h2>
                <p className="mt-2">
                  {" "}
                  It Uses A Dictionary <br />
                  Of Over 200
                </p>
              </div>
              <div className="border step">
                <div className="step-round-first bg-red-200">
                  <div className="step-round-second bg-red-500">
                    <h1 className="text-2xl font-bold text-white ">02</h1>
                  </div>
                </div>
                <h2 className="text-2xl  font-bold mt-2 ">STEP TWO</h2>
                <p className="mt-2">
                  {" "}
                  It Uses A Dictionary <br />
                  Of Over 200
                </p>
              </div>
              <div className="border step">
                <div className="step-round-first bg-red-200">
                  <div className="step-round-second bg-red-500">
                    <h1 className="text-3xl font-bold text-white ">03</h1>
                  </div>
                </div>
                <h2 className="text-2xl  font-bold mt-2 ">STEP THREE</h2>
                <p className="mt-2">
                  {" "}
                  It Uses A Dictionary <br />
                  Of Over 200
                </p>
              </div>
            </div>
          </div>
          <div className="bottom-img">
            <img src={bottomBanner} alt="" />
            <div className="img-payer">
              <FaYoutube className="icon" />
            </div>
          </div>
        </div>

        <div className="second-col">
          <div className="services-container">
            <h2 className="font-bold text-3xl">Services</h2>
             {/* {
              data?.facility.map((fc,index)=>{
               <h3>{fc.name}</h3>
              })
             } */}
            
          </div>

           <div>
            <h1 className="text-3xl font-bold mt-10">Pirce  ${data?.price}</h1>
           <Link to=''>
           <Link to={`/checkbox/${data?._id}`}><button className="checkout-btn">Proceed Checkout</button></Link>
           </Link>
           </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
