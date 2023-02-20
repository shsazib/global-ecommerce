import Section_title from "@/Components/section-title/section-title";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Categories = () => {
  return (
    <>
      <div className="categories_page_section content_container mb-[40px]">
        <Section_title title="All Categories" />
        <div className="all_categories_list">
          <div className="single_categories_list flex gap-4 justify-between p-2 md:p-4  rounded">
            <div className="flex flex-col gap-1">
              <h2 className="mb-3 font-medium">Automobiles</h2>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Scooter</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Motorcycle</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Cars</Link>
              </div>
            </div>
            <div className="page_all_cat_img">
              <Link href="#">
                <img src="all categories/bike.png"></img>
              </Link>
            </div>
          </div>
          <div className="single_categories_list flex gap-4 justify-between p-2 md:p-4 rounded">
            <div className="flex flex-col gap-1">
              <h2 className="mb-3 font-medium">Software</h2>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Operating System</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Office Application</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Database Server</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">OTT Platform</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">AutoDesk</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Adobe</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Antivirus</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Mail Server Solution</Link>
              </div>
            </div>
            <div className="page_all_cat_img">
              <Link href="#">
                <img src="all categories/laravel.png"></img>
              </Link>
            </div>
          </div>
          <div className="single_categories_list flex gap-4 justify-between p-2 md:p-4 rounded">
            <div className="flex flex-col gap-1">
              <h2 className="mb-3 font-medium">Grocery</h2>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Cakes</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Meat & Fish</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Fruits & Vegetables</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Beverage</Link>
              </div>
            </div>
            <div className="page_all_cat_img">
              <Link href="#">
                <img src="all categories/grocery.png"></img>
              </Link>
            </div>
          </div>
          <div className="single_categories_list flex gap-4 justify-between p-2 md:p-4 rounded">
            <div className="flex flex-col gap-1">
              <h2 className="mb-3 font-medium">Mobile</h2>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Smart Phone</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Feature Phone</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Mobile Accessories</Link>
              </div>
            </div>
            <div className="page_all_cat_img">
              <Link href="#">
                <img src="all categories/mobile.png"></img>
              </Link>
            </div>
          </div>
          <div className="single_categories_list flex gap-4 justify-between p-2 md:p-4 rounded">
            <div className="flex flex-col gap-1">
              <h2 className="mb-3 font-medium">Appliances</h2>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Kitchen Appliances</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Refrigerators</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Air Conditioners</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Washing Machines</Link>
              </div>
            </div>
            <div className="page_all_cat_img">
              <Link href="#">
                <img src="all categories/Appliances.png"></img>
              </Link>
            </div>
          </div>
          <div className="single_categories_list flex gap-4 justify-between p-2 md:p-4 rounded">
            <div className="flex flex-col gap-1">
              <h2 className="mb-3 font-medium">Home</h2>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Home Decor</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Household</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Kitchen & Dining</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Home Furniture</Link>
              </div>
            </div>
            <div className="page_all_cat_img">
              <Link href="#">
                <img src="all categories/home.png"></img>
              </Link>
            </div>
          </div>
          <div className="single_categories_list flex gap-4 justify-between p-2 md:p-4 rounded">
            <div className="flex flex-col gap-1">
              <h2 className="mb-3 font-medium">Toys</h2>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Baby Chair & Table</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Educational Toys</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Remote Control Toys</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Electric Bikes</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Baby Sliders</Link>
              </div>
            </div>
            <div className="page_all_cat_img">
              <Link href="#">
                <img src="all categories/toys.png"></img>
              </Link>
            </div>
          </div>
          <div className="single_categories_list flex gap-4 justify-between p-2 md:p-4 rounded">
            <div className="flex flex-col gap-1">
              <h2 className="mb-3 font-medium">Travel</h2>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Hotel</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Flight</Link>
              </div>
            </div>
            <div className="page_all_cat_img">
              <Link href="#">
                <img src="all categories/travel.png"></img>
              </Link>
            </div>
          </div>
          <div className="single_categories_list flex gap-4 justify-between p-2 md:p-4 rounded">
            <div className="flex flex-col gap-1">
              <h2 className="mb-3 font-medium">Health & Beauty</h2>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Personal Care & Fitness</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Health & Teeth Care</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Hair Care</Link>
              </div>
              <div className="flex gap-2 justify-start">
                <BsArrowRight />
                <Link href="#">Body & Bath Care</Link>
              </div>
            </div>
            <div className="page_all_cat_img">
              <Link href="#">
                <img src="all categories/health.png"></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
