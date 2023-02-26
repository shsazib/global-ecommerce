import { useRouter } from "next/router";
import React, { useState } from "react";
import Color_option from "../components/product-details-components/product-details-color-option";
import ProductViewSwiper from '../Components/product-details-components/product_view_swiper';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsStarFill, BsStar } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Link from "next/link";

const productDetails = () => {
  const [activeIndex, setActiveIndex] = useState();
  return (
    <>
      <div className="product_details_section">
        <div className="product_details">
          <div className="product_details_container">
            <div className="product_view">
              <img
                className="product_view_main_img"
                src="product/apple-watch.jpg"
              ></img>
                <ProductViewSwiper />
            </div>
            <div className="product_sort_cont">
              <div className="product_sc_name_review border_bottom">
                <h2 className="text-[22px]">Xiaomi Amazfit GTS 2 Mini Smartwatch</h2>
                <div className="product_review_star flex items-center">
                  <BsStarFill className="product_review_star_icone" />
                  <BsStarFill className="product_review_star_icone" />
                  <BsStarFill className="product_review_star_icone" />
                  <BsStar className="product_review_star_icone" />
                  <BsStar className="product_review_star_icone" />
                  <span>(2)</span>
                </div>
              </div>
              <div className="product_sc_price border_bottom">
                <p>Price:</p>
                <p>TK. 10,000</p>
              </div>
              <div className="product_sc_color_btn border_bottom">
                <p>Color:</p>
                <div className="product_sc_color">
                  <Color_option />
                </div>
              </div>
              <div className="product_sc_quantity border_bottom">
                <p>Quantity:</p>
                <div className="p_quantity">
                  <button>-</button>
                  <span>0</span>
                  <button>+</button>
                  <span>(8 available)</span>
                </div>
              </div>
              <div className="product_sc_total_price">
                <p>Total Price:</p>
                <p>TK. 10,000</p>
              </div>
              <div className="product_cart_buy_btn">
                <Link href="#" className="btn_1 text-center">Add to cart</Link>
                <Link href="#" className="btn_2 text-center text-[16px] p-[8px]">Buy Now</Link>
              </div>
              <div className="product_wish_comp_btn">
                <button>Add to wishlist</button>
                <button>Add to compare</button>
              </div>
              <div className="product_refund">
                <p>Refund:</p>
                <Link href="#">View Policy</Link>
              </div>
              <div className="product_sc_share">
                <p>Share: </p>
                <div className="product_share">
                  <FaFacebookSquare className="product_share_icon facebook" />
                  <AiOutlineWhatsApp className="product_share_icon whatsapp" />
                  <AiFillTwitterSquare className="product_share_icon twitter" />
                  <AiFillLinkedin className="product_share_icon linkedin" />
                </div>
              </div>
            </div>
            <div className="details_related_product">
              <h2 className="border_bottom py-2 text-[20px]">Recent Products</h2>
            </div>
          </div>

          <Tabs className="tabs">
            <TabList>
              <Tab>Description</Tab>
              <Tab>Video</Tab>
              <Tab>Reviews</Tab>
            </TabList>

            <TabPanel>
              <div className="pd_description">
                <h1 className="pd_description_heading h1">
                  Xiaomi Amazfit GTS 2 mini Smart Watch
                </h1>
                <p>
                  The Xiaomi Amazfit GTS 2 mini comes with a borderless design.
                  It features a 1.55-inch AMOLED screen, meaning your display
                  will be exciting, vibrant, and practical whenever you check
                  the time. It features carefully curved 2.5D glass to enhance
                  your most fashionable outfits. With a light 19.5 g weight, a
                  thickness of 8.95 mm (without the sensor base), and a
                  skin-friendly silicone strap, the GTS 2 mini allows you to
                  enjoy the lightness of time. With 80+ watch faces to choose
                  from, most of which have a matching Always-on Display, you can
                  make sure you're always in style and able to see the interface
                  you like. Or, to make the watch face truly yours, upload your
                  own photos to the background and focus on what you care about
                  with the custom modular dial. The Amazfit GTS 2 mini can
                  provide heart rate monitoring, blood-oxygen saturation
                  measurement, sleep monitoring, stress level monitoring, and
                  female cycle tracking, as well as other functions to achieve
                  total health management from your wrist. The PAI health
                  assessment system also processes complex health data with an
                  advanced algorithm to present your physical condition in a
                  simple, single-value score. Blood-oxygen saturation (SpO2) is
                  one of the most important indicators of human health. You can
                  easily test your SpO2 level anytime you need. It supports a
                  24-hour high-precision heart rate monitoring function and it
                  gives warnings to protect you from the probability of
                  accidents. You can talk to Alexa on your Amazfit GTS 2 mini as
                  it comes with Alexxa built-in. The Amazfit GTS 2 mini-features
                  over 70 built-in sports modes. A fully charged battery
                  provides up to 14 days of battery life. The Xiaomi Amazfit GTS
                  2 mini has 01 year warranty (For Warranty Claim you Must
                  submit Box along with accessories. physical Damage or dent/
                  scratch will not be accepted for warranty.)
                </p>
                <h1 className="pd_description_heading">
                  Xiaomi Amazfit GTS 2 mini Smart Watch
                </h1>
                <p>
                  The Xiaomi Amazfit GTS 2 mini comes with a borderless design.
                  It features a 1.55-inch AMOLED screen, meaning your display
                  will be exciting, vibrant, and practical whenever you check
                  the time. It features carefully curved 2.5D glass to enhance
                  your most fashionable outfits. With a light 19.5 g weight, a
                  thickness of 8.95 mm (without the sensor base), and a
                  skin-friendly silicone strap, the GTS 2 mini allows you to
                  enjoy the lightness of time. With 80+ watch faces to choose
                  from, most of which have a matching Always-on Display, you can
                  make sure you're always in style and able to see the interface
                  you like. Or, to make the watch face truly yours, upload your
                  own photos to the background and focus on what you care about
                  with the custom modular dial. The Amazfit GTS 2 mini can
                  provide heart rate monitoring, blood-oxygen saturation
                  measurement, sleep monitoring, stress level monitoring, and
                  female cycle tracking, as well as other functions to achieve
                  total health management from your wrist. The PAI health
                  assessment system also processes complex health data with an
                  advanced algorithm to present your physical condition in a
                  simple, single-value score. Blood-oxygen saturation (SpO2) is
                  one of the most important indicators of human health. You can
                  easily test your SpO2 level anytime you need. It supports a
                  24-hour high-precision heart rate monitoring function and it
                  gives warnings to protect you from the probability of
                  accidents. You can talk to Alexa on your Amazfit GTS 2 mini as
                  it comes with Alexxa built-in. The Amazfit GTS 2 mini-features
                  over 70 built-in sports modes. A fully charged battery
                  provides up to 14 days of battery life. The Xiaomi Amazfit GTS
                  2 mini has 01 year warranty (For Warranty Claim you Must
                  submit Box along with accessories. physical Damage or dent/
                  scratch will not be accepted for warranty.)
                </p>
              </div>
            </TabPanel>
            <TabPanel className="video_tab">
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/ailJQd32pKI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </TabPanel>
            <TabPanel>
              <diV className="review_tab">
                <diV className="review_content">
                  <h1 className="h2">Based on 2 reviews</h1>
                  <div className="review_item">
                    <div className="single_review">
                      <h4>Md Sazib</h4>
                      <p className="single_review_comment">(Comment)</p>
                      <p>This product is best</p>
                    </div>
                    <div className="single_review">
                      <h4>Md Nasir</h4>
                      <p className="single_review_comment">(Comment)</p>
                      <p>This product is best</p>
                    </div>
                  </div>
                </diV>
                <diV className="all_review_input">
                  <p className="review_pro_name h2">
                    Be the first to review “Wireless Audio System Multiroom 360”
                  </p>
                  <div className="your_rating review_input review_input">
                    <p>Your Rating</p>
                    <div id="rating_bar">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <span
                          className={activeIndex == i ? "active" : ""}
                          onClick={() => setActiveIndex(i)}
                        ></span>
                      ))}
                    </div>
                  </div>
                  <div className="your_review review_input">
                    <p>Your Review</p>
                    <textarea />
                  </div>
                  <div className="your_name review_input">
                    <p>Name *</p>
                    <input />
                  </div>
                  <div className="your_Email review_input">
                    <p>Email*</p>
                    <input />
                  </div>
                  <div className="review_checked">
                    <input id="checkbox" type="checkbox" />
                    <label for="checkbox">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <br />
                  <button className="btn_1">
                    Add Review
                  </button>
                </diV>
              </diV>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default productDetails;