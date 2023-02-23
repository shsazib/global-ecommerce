import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GoTriangleDown } from "react-icons/go";
import { useApp } from "@/Global-fun/AppProvider";
import AllCategories from "../all-categories/all-categories";
import { FaList } from "react-icons/fa";

const navBottom = () => {
  const { categoryToggle, setCategoryToggle } = useApp();

  return (
    <>
      <div className="bg-[var(--theme)] text-black font-caveat">
        <nav className="navigation_bar content_container">
          <div className="nav_bottom_first flex gap-3 justify-center items-center">
            <svg
              onClick={() => setCategoryToggle(!categoryToggle)}
              xmlns="http://www.w3.org/2000/svg"
              className="categories_icon"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <Link href="/brands">Brands</Link>
            </li>
            <li className="nav_sub_menu_container">
              <Link href="#">
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
          <Link href="tel:88010000000000">
            <p>+88010000000000</p>
          </Link>
        </nav>
      </div>

      <div className="content_container">
        <div className="nav_all_cat">
          {categoryToggle ? <AllCategories /> : ""}
        </div>
      </div>
    </>
  );
};

export default navBottom;
