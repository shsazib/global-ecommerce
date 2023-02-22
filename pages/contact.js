import React from "react";
import { useFormik } from "formik";
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const contact = () => {


  const formik = useFormik({
    initialValues: {
        name: "",
        email: "",
        subject: "",
        comment: "",
    },
    onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm({ values: '' })
    },
})




  return (
    <>
      <div className="contact_container content_container">
        <form className="message_input grid gap-5" onSubmit={formik.handleSubmit}>
          <h2>Send A Message</h2>
          <div className="grid  gap-5">
            <div className="grid  gap-1">
              <label for="name">Name</label>
              <input id="name" placeholder="Name" name="name" onChange={formik.handleChange} value={formik.values.name} />
            </div>
            <div className="grid  gap-1">
              <label for="email">Email</label>
              <input id="email" placeholder="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
            </div>
            <div className="grid  gap-1">
              <label for="subject">Subject</label>
              <input id="subject" placeholder="Subject" name="subject" onChange={formik.handleChange} value={formik.values.subject} />
            </div>
            <div className="grid  gap-1">
              <label for="message">Message</label>
              <textarea id="message" placeholder="Message" name="comment" onChange={formik.handleChange} value={formik.values.comment} />
            </div>
          </div>
          <button type="submit" className="btn_1">
            SEND
          </button>
        </form>
        <div className="message_content flex flex-col gap-5">
          <h2>Reach On Us</h2>
          <div className="flex gap-2 items-center">
            <GoLocation className="text-[25px]" />
            <p  className="text-[14px] md:text-[16px]">
              Lake City Concord Shopping Complex(6th Floor), Khilkhet,
              Dhaka-1229, Bangladesh
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <BsFillTelephoneFill className="text-[18px]" />
            <div className="grid text-[14px] md:text-[16px]">
              <p>+8801234567890</p>
              <p>+8801234567890</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <GrMail className="text-[18px]" />
            <div className="grid text-[14px] md:text-[16px]">
              <p>demo123@gmail.com</p>
              <p>demo321@gmail.com</p>
            </div>
          </div>
          <div className="contact_follow_us grid gap-5">
            <h2>Follow Us</h2>
            <div className="contact_follow_us_icon flex gap-5">
              <Link href="#">
                <FaFacebook className="contact_single_icon" />
              </Link>
              <Link href="#">
                <FaTwitter className="contact_single_icon" />
              </Link>
              <Link href="#">
                <FaLinkedinIn className="contact_single_icon" />
              </Link>
              <Link href="#">
                <FaInstagram className="contact_single_icon" />
              </Link>
              <Link href="#">
                <FaYoutube className="contact_single_icon" />
              </Link>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.816381776648!2d90.42269155113932!3d23.78955209311948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bd0340980f%3A0xc1b37b7f015631e1!2sBikers%20Ocean!5e0!3m2!1sen!2sbd!4v1677041335556!5m2!1sen!2sbd"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
