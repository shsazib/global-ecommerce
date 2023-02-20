import React from "react";

const Section_title = ({ title, view_more = null, link = null, icon = null }) => {
  return (
    <>
      <div className="section_title content_container">
        <h2>{title}</h2>
        <div className=" flex items-center gap-1">
          <a href={link}>{view_more}</a>
          {icon}
        </div>
      </div>
    </>
  );
};

export default Section_title;
