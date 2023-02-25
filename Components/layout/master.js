import React from "react";
import Head from "next/head";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Mobile_footer_navbar from "../mobile-footer-navbar/mobile_footer_navbar";
import Mobile_all_categories from "../mobile-all-categories/Mobile_all_categories";

import Mobile_menu_var from "../mobile-menu-var/mobile_menu_var";

const master = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="logo/favicon.jpg" />
        <title>Online Shop</title>
      </Head>

      <Mobile_all_categories />
      <Mobile_menu_var />

      <Navbar />
      <div className="content_warp">{children}</div>
      <Footer />
      <Mobile_footer_navbar />
    </>
  );
};

export default master;
