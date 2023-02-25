import Link from "next/link";
import React from "react";
import { GoTriangleRight } from "react-icons/go";

const cart_title = () => {
  return (
    <>
      <div className="cart_structure_section content_container my-6">
        <div className="flex items-center justify-center text-[17px] md:text-[22px] gap-1 md:gap-3 text-[#555] font-medium">
          <Link href="/cart">
            <h2>View Cart</h2>
          </Link>
          <GoTriangleRight />
          <Link href="./checkout">
            <h2>Check Out</h2>
          </Link>
          <GoTriangleRight />
          <Link href="/confirm-order">
            <h2>Confirm Order</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default cart_title;
