import React from "react";
import Link from "next/link";
import { GoTriangleDown } from "react-icons/go";

const navBottom = () => {
  return (
    <>
      <div className="bg_color text_color font-caveat text_color">
        <nav className="navigation_bar content_container">
          <div className=" flex gap-3 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="categories_icon"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
            <span className="select-none text-sm	">ALL CATEGORIES</span>
          </div>
          <ul className="flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">Products</Link>
            </li>
            <li>
              <Link href="#">Categories</Link>
            </li>
            <li>
              <Link href="#">Brands</Link>
            </li>
            <li className="nav_sub_menu_container">
              <Link href="javascript:void(0)">
                Pages <GoTriangleDown className="inline-block	" />
              </Link>

              <ul className="nav_sub_menu">
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="">
            <p>+88010000000000</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default navBottom;
