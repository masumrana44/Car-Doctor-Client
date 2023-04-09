import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BannerItem = ({ slider }) => {
  const { id, image, prev, next } = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full" alt="" />
      </div>

      <div className="absolute justify-start flex  transform -translate-y-1/2 left-24  top-1/3 ">
        <h1 className="text-6xl font-bold text-white">
          Affordable
          <br />
          Price For Car
          <br />
          Servicing
        </h1>
      </div>
      <div className="absolute justify-start flex  transform -translate-y-1/2 left-24   mt-4 top-80 ">
        <p className="text-white text-lg">
          There Are Many Variations Of Passages Of Available, But <br />
          The Majority Have Suffered Alteration In Some Form.
        </p>
      </div>
      <div className="absolute justify-start flex  transform -translate-y-1/2 left-24  mt-6 top-96 ">
        <button className=" banner-btn  text-white  w-52 mr-5">
          Discover More
        </button>
        <button className=" banner-btn  text-white  w-52">
          Latest Project
        </button>
      </div>

      <div className="absolute justify-end flex  transform -translate-y-1/2 right-5 bottom-0 ">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle mr-6 hover:bg-red-700 "
        >
          <FaArrowLeft />
        </a>
        <a href={`#slide${next}`} className="btn btn-circle  hover:bg-red-700">
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
