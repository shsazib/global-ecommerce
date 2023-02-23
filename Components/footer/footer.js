import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer_section">
        <div className="footer_container content_container">
          <div className="footer_img">
            <img src="logo/footer-logo.png" alt="img"></img>
          </div>
          <div className="footer_midel">
            <div className="footer_contact_us">
              <h1>Contact Us</h1>
              <div className="grid gap-2">
                <div>
                  <h2>Address:</h2>
                  <p>
                    Concord Shopping Complex, Lake City, Khilkhet, Dhaka-1229
                  </p>
                </div>
                <div>
                  <h2>Email:</h2>
                  <p>test@gmail.com</p>
                </div>
                <div>
                  <h2>Phone:</h2>
                  <p>01234567890</p>
                </div>
              </div>
            </div>
            <div className="footer_useful_links">
              <h1>Useful Links</h1>
              <div className="grid gap-2">
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
                <Link href="/privacy-policy">Privacy policy</Link>
                <Link href="/refund-policy">Refund Policy</Link>
              </div>
            </div>
            <div className="footer_account">
              <h1>My Account</h1>
              <div className="grid gap-2">
                <Link href="/login">Login</Link>
                <Link href="/register">Create Account</Link>
              </div>
            </div>
            <div className="footer_about">
              <h1>About</h1>
              <div className="grid gap-2">
                <p>
                  Leading Computer, Laptop & Gaming PC Retail & Online Shop in
                  Bangladesh. Technology has become a part of our daily lives
                  and for a huge portion of our life, we are dependent on tech
                  products daily.
                </p>
                <div className="footer_icon flex gap-5">
                  <Link href="#">
                    <FaFacebookF className="footer_single_icon" />
                  </Link>
                  <Link href="#">
                    <FaTwitter className="footer_single_icon" />
                  </Link>
                  <Link href="#">
                    <FaLinkedinIn className="footer_single_icon" />
                  </Link>
                  <Link href="#">
                    <FaInstagram className="footer_single_icon" />
                  </Link>
                  <Link href="#">
                    <FaYoutube className="footer_single_icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
