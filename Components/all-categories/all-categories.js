import Link from "next/link";
import React from "react";
import { TiThSmall } from "react-icons/ti";
import { FaTshirt } from "react-icons/fa";
import { SlPlane, SlGameController, SlScreenDesktop } from "react-icons/sl";
import { RiMentalHealthLine } from "react-icons/ri";
import { CiMobile1 } from "react-icons/ci";

const AllCategories = () => {
  return (
    <>
      <div className="all_categories font-caveat">
        <ul>
          <li>
            <Link href="#" className="flex items-center gap-2">
              <TiThSmall />
              All Offers
            </Link>
          </li>

          <li className="main_cat_li">
            <Link
                href="#" className="flex items-center justify-between	">
              <div
                className="flex items-center gap-2 main_cat_li_link"
              >
                <FaTshirt />
                Fashion
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </Link>

            <div className="categories_sub_menu">
              <div className="single_categories">
                <h3>kids</h3>
                <div className="cate_sing_item">
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Boys & Girls Trackpants</Link>
                  </div>
                  <div>
                    <Link href="#">Boys & Girls Innerwear</Link>
                  </div>
                  <div>
                    <Link href="#">Infant Wear</Link>
                  </div>
                  <div>
                    <Link href="#">Kids Sports Shoes</Link>
                  </div>
                </div>
              </div>
              <div className="single_categories">
                <h3>MEN FOOTWEAR</h3>
                <div className="cate_sing_item">
                  <div>
                    <Link href="#">Men's Formal Shoes</Link>
                  </div>
                  <div>
                    <Link href="#">Active Footwear</Link>
                  </div>
                  <div>
                    <Link href="#">Combo Footwear</Link>
                  </div>
                  <div>
                    <Link href="#">Shoe Care</Link>
                  </div>
                </div>
              </div>
              <div className="single_categories">
                <h3>MEN'S BOTTOM WEAR</h3>
                <div className="cate_sing_item">
                  <div>
                    <Link href="#">Men's Jeans</Link>
                  </div>
                  <div>
                    <Link href="#">Men's Cargos</Link>
                  </div>
                  <div>
                    <Link href="#">Men's Ethnic Pyjama</Link>
                  </div>
                  <div>
                    <Link href="#">Men's Trousers</Link>
                  </div>
                  <div>
                    <Link href="#">Men's Shorts</Link>
                  </div>
                </div>
              </div>
              <div className="single_categories">
                <h3>MEN'S TOP WEAR</h3>
                <div className="cate_sing_item">
                  <div>
                    <Link href="#">Men's Formal Shirts</Link>
                  </div>
                  <div>
                    <Link href="#">Men's Blazers</Link>
                  </div>
                  <div>
                    <Link href="#">Men's Suit</Link>
                  </div>
                  <div>
                    <Link href="#">Men's T-Shirts</Link>
                  </div>
                  <div>
                    <Link href="#">Men's Ethnic Sets</Link>
                  </div>
                </div>
              </div>
              <div className="single_categories">
                <h3>WINTER</h3>
                <div className="cate_sing_item">
                  <div>
                    <Link href="#">Men's Sweatshirts</Link>
                  </div>
                  <div>
                    <Link href="#">Men's Sweaters</Link>
                  </div>
                  <div>
                    <Link href="#">Kids Sweatshirts</Link>
                  </div>
                  <div>
                    <Link href="#">Women Kurtas</Link>
                  </div>
                  <div>
                    <Link href="#">Kids Jackets</Link>
                  </div>
                </div>
              </div>
              <div className="single_categories">
                <h3>WOMEN ETHNIC</h3>
                <div className="cate_sing_item">
                  <div>
                    <Link href="#">Women Gowns</Link>
                  </div>
                  <div>
                    <Link href="#">Women Lehenga Cholis</Link>
                  </div>
                  <div>
                    <Link href="#">Women Palazzos & Shararas</Link>
                  </div>
                  <div>
                    <Link href="#">Women Blouse</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="main_cat_li">
            <div className="flex items-center justify-between	">
              <Link
                href="#"
                className="flex items-center gap-2 main_cat_li_link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M6 6m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z"></path>
                  <path d="M9 18v3h6v-3"></path>
                  <path d="M9 6v-3h6v3"></path>
                </svg>
                Electronic
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </div>

            <div className="categories_sub_menu">
              <div className="single_categories">
                <h3>kids</h3>
                <div className="cate_sing_item">
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="main_cat_li">
            <div className="flex items-center justify-between	">
              <Link
                href="#"
                className="flex items-center gap-2 main_cat_li_link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z"></path>
                  <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5"></path>
                  <path d="M6 19v2"></path>
                  <path d="M18 19v2"></path>
                </svg>
                Home
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </div>

            <div className="categories_sub_menu">
              <div className="single_categories">
                <h3>kids</h3>
                <div className="cate_sing_item">
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="main_cat_li">
            <div className="flex items-center justify-between	">
              <Link
                href="#"
                className="flex items-center gap-2 main_cat_li_link"
              >
                <SlPlane />
                Travel
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </div>

            <div className="categories_sub_menu">
              <div className="single_categories">
                <h3>kids</h3>
                <div className="cate_sing_item">
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="main_cat_li">
            <div className="flex items-center justify-between	">
              <Link
                href="#"
                className="flex items-center gap-2 main_cat_li_link"
              >
                <RiMentalHealthLine />
                Health & Beauty
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </div>

            <div className="categories_sub_menu">
              <div className="single_categories">
                <h3>kids</h3>
                <div className="cate_sing_item">
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="main_cat_li">
            <div className="flex items-center justify-between	">
              <Link
                href="#"
                className="flex items-center gap-2 main_cat_li_link"
              >
                <CiMobile1 />
                Mobile
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </div>

            <div className="categories_sub_menu">
              <div className="single_categories">
                <h3>kids</h3>
                <div className="cate_sing_item">
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="main_cat_li">
            <div className="flex items-center justify-between	">
              <Link
                href="#"
                className="flex items-center gap-2 main_cat_li_link"
              >
                <SlScreenDesktop />
                Appliances
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </div>

            <div className="categories_sub_menu">
              <div className="single_categories">
                <h3>kids</h3>
                <div className="cate_sing_item">
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                </div>
              </div>
            </div>
          </li>

            <li className="main_cat_li">
            <div className="flex items-center justify-between	">
              <Link
                href="#"
                className="flex items-center gap-2 main_cat_li_link"
              >
                <SlGameController />
                Toys
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </div>

            <div className="categories_sub_menu">
              <div className="single_categories">
                <h3>kids</h3>
                <div className="cate_sing_item">
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                  <div>
                    <Link href="#">Girls Dresses</Link>
                  </div>
                </div>
              </div>
            </div>
            </li>
            <li className="main_cat_li">
            <div className="flex items-center gap-2">
              <Link
                href="#"
                className=" main_cat_li_link theme_color font-semibold"
              >View All Categories</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="theme_color"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 6l6 6l-6 6"></path>
              </svg>
            </div>
            </li>

        </ul>
      </div>
    </>
  );
};

export default AllCategories;
