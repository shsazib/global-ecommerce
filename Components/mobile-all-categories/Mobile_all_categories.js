import React from "react";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { useApp } from "@/Global-fun/AppProvider";

const Mobile_all_categories = () => {
  const { phoneCatToggle, phoneCatToggleHandel } = useApp();

  return (
    <>
      <div
        className={
          phoneCatToggle
            ? "mobile_all_categories_open"
            : "mobile_all_categories_close"
        }
      >
        <div className="mobile_nav_logo flex items-center justify-between mb-8">
          <Link href="/" className="w-16">
            <img src="logo/Logo.png"></img>
          </Link>
          <svg
            onClick={phoneCatToggleHandel}
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
        <div className="mobile_cate_nav">
          <ul>
            <li className="pac_border_bottom">
              <Link href="#">All Offers</Link>
            </li>
            <li>
              <div className="pac_border_bottom flex items-center justify-between">
                <Link href="#">Products</Link>
                <RiArrowDownSLine className="text-[18px]" />
              </div>
              <div className="p_cat_submenu">
                <div className="">
                  <div className=" pac_border_bottom flex items-center justify-between">
                    <Link href="#">Kids</Link>
                    <RiArrowDownSLine className="text-[18px]" />
                  </div>
                  <div className="p_cat_nested_submenu">
                    <div className="pac_border_bottom">
                      <Link href="#">Infant Wear</Link>
                    </div>
                    <div className="pac_border_bottom">
                      <Link href="#">Boys & Girls Innerwear</Link>
                    </div>
                    <div className="pac_border_bottom">
                      <Link href="#">Girls Dresses</Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="pac_border_bottom flex items-center justify-between">
                    <Link href="#">MEN FOOTWEAR</Link>
                    <RiArrowDownSLine className="text-[18px]" />
                  </div>
                  <div className="p_cat_nested_submenu">
                    <div className="pac_border_bottom">
                      <Link href="#">Combo Footwear</Link>
                    </div>
                    <div className="pac_border_bottom">
                      <Link href="#">Active Footwear</Link>
                    </div>
                    <div className="pac_border_bottom">
                      <Link href="#">Men's Formal Shoes</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Mobile_all_categories;
