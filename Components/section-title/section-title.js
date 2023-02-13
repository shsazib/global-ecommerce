import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Section_title = ({ title, view_more, link }) => {
  return (
    <>
      <div className="section_title content_container">
        <h2>{title}</h2>
        <div className=" flex items-center gap-1">
          <a href={link}>{view_more}</a>
          <BsArrowRightShort />
        </div>
      </div>
    </>
  );
};

export default Section_title;
