import { useApp } from "@/Global-fun/AppProvider";
import Link from "next/link";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const mobile_menu_var = () => {
  const { phoneNavToggle, phoneNavToggleHandel } = useApp();

  return (
    <>
      <div
        className={
          phoneNavToggle
          ? "mobile_menu_var_section_open"
            : "mobile_menu_var_section_close"
        }
      >
        <div className="mobile_nav_logo flex items-center justify-between mb-8">
          <Link href="/" className="w-16">
            <img src="logo/Logo.png"></img>
          </Link>
          <svg
            onClick={phoneNavToggleHandel}
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </div>

        <div className="mobile_menu_var">
          <ul>
            <li className="mmv_border_bottom">
              <Link href="#">Home</Link>
            </li>
            <li className="mmv_border_bottom">
              <Link href="#">Products</Link>
            </li>
            <li className="mmv_border_bottom">
              <Link href="#">Categories</Link>
            </li>
            <li className="mmv_border_bottom ">
              <Link href="#">Brands</Link>
            </li>
            <li>
              <div className="mmv_border_bottom flex justify-between items-center">
                <Link href="#">Pages</Link>
                <RiArrowDownSLine className="text-[18px]" />
              </div>
              <div className="mobile_submenu_var">
                <div className="mmv_border_bottom">
                  <Link href="#">About US</Link>
                </div>
                <div className="mmv_border_bottom">
                  <Link href="#">Contact</Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default mobile_menu_var;
