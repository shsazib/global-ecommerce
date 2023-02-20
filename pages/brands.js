import Section_title from "@/Components/section-title/section-title";
import Link from "next/link";
import React from "react";

const Brands = () => {
  return (
    <>
      <div className="brands_section_container content_container mb-[40px]">
        <Section_title title="All Brands" />
        <div className="all_brand_content grid gap-5">
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/dell.png"></img>
            </Link>
            <span>Dell</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/adidas.png"></img>
            </Link>
            <span>Adidas</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/apple.png"></img>
            </Link>
            <span>Apple</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/adobe.png"></img>
            </Link>
            <span>Adobe</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/audi.png"></img>
            </Link>
            <span>Audi</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/citi.png"></img>
            </Link>
            <span>Citi</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/gucci.png"></img>
            </Link>
            <span>Gucci</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/heineken.png"></img>
            </Link>
            <span>Heineken</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/hermes.png"></img>
            </Link>
            <span>Hermes</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/hewlett.png"></img>
            </Link>
            <span>Hewlett</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/hm.png"></img>
            </Link>
            <span>HM</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/honda.png"></img>
            </Link>
            <span>Honda</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/nike.png"></img>
            </Link>
            <span>Nike</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/nivea.png"></img>
            </Link>
            <span>Nivea</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/suzuki.png"></img>
            </Link>
            <span>Suzuki</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/apple.png"></img>
            </Link>
            <span>Apple</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/adobe.png"></img>
            </Link>
            <span>Adobe</span>
          </div>
          <div className="brand_single_content ">
            <Link href="#">
              <img src="brand/audi.png"></img>
            </Link>
            <span>Audi</span>
          </div>
        </div>
        <div className="grid justify-center mt-10">
        <button className="btn_1">Show More</button>
        </div>
      </div>
    </>
  );
};

export default Brands;
