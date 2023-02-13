import Link from "next/link";
import React from "react";

const Home_percent_off = () => {
  return (
    <div className="percent_off_section gap-4">
      <Link href="#">
        <img src="home-percent-off/img-1.png"></img>
      </Link>
      <Link href="#">
        <img src="home-percent-off/img-2.png"></img>
      </Link>
      <Link href="#">
        <img src="home-percent-off/img-3.png"></img>
      </Link>
      <Link href="#">
        <img src="home-percent-off/img-4.png"></img>
      </Link>
    </div>
  );
};

export default Home_percent_off;
