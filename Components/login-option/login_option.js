import React, { useState } from "react";
import Link from "next/link";
import { BsFacebook, BsGoogle } from "react-icons/bs";

const login_option = ({ link, title }) => {
  const [logChange, setLogChange] = useState();

  const handelLog = () => {
    setLogChange(!logChange);
  };

  return (
    <>
      <div className="login_option grid gap-4">
        <div className="or_continue_with">
          <p>or continue with</p>
          <hr />
        </div>
        <div className="login_social_option flex items-center justify-around gap-2 mt-3">
          <div className="login_social_option_fb flex items-center gap-2 justify-center cursor-pointer">
            <BsFacebook />
            <span>Facebook</span>
          </div>
          <div className="login_social_option_google flex items-center gap-2 justify-center cursor-pointer">
            <BsGoogle />
            <span>Google</span>
          </div>
        </div>
        <h2>
          Don't have an account?
          <Link
            onClick={handelLog}
            className="font-medium hover:text-[var(--theme)]"
            href={link}
          >
            {title}
          </Link>
        </h2>
      </div>
    </>
  );
};

export default login_option;
