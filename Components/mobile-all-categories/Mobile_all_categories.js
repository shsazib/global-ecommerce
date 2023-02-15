import React from "react";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";


const Mobile_all_categories = () => {
  
  return (
    <>
      <div className="mobile_all_categories_close">
        <div className="mobile_nav_logo flex items-center justify-between mb-8">
          <Link href="/" className="w-16">
            <img src="logo/Logo.png"></img>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-x"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
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
                <RiArrowDownSLine />
              </div>
              <div className="p_cat_submenu">
                <div className="">
                  <div className=" pac_border_bottom flex items-center justify-between">
                    <Link href="#">Kids</Link>
                    <RiArrowDownSLine />
                  </div>
                  <div className="p_cat_nested_submenu">
                    <div className="pac_border_bottom">
                      <Link href="#">1</Link>
                    </div>
                    <div className="pac_border_bottom">
                      <Link href="#">1</Link>
                    </div>
                    <div className="pac_border_bottom">
                      <Link href="#">1</Link>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className=" pac_border_bottom flex items-center justify-between">
                    <Link href="#">Kids</Link>
                    <RiArrowDownSLine />
                  </div>
                  <div className="p_cat_nested_submenu">
                    <div className="pac_border_bottom">
                      <Link href="#">2</Link>
                    </div>
                    <div className="pac_border_bottom">
                      <Link href="#">2</Link>
                    </div>
                    <div className="pac_border_bottom">
                      <Link href="#">2</Link>
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
