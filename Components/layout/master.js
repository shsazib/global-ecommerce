import React from "react";
import Head from "next/head";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const master = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <title>MYCHOICE</title>
      </Head>

      <Navbar />
        <div className="content_warp">{children}</div>
      <Footer />
    </>
  );
};

export default master;
