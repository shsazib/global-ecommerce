import React, { useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Login_option from "@/Components/login-option/login_option";

const login = () => {
  const [changeLogin, setChangeLogin] = useState();

  const handelLogin = () => {
    setChangeLogin(!changeLogin);
  };

  return (
    <>
      <div className="login_section">
        <div className=" login_content">
          <div className="grid gap-2">
            <h2 className="text-[25px] font-medium text-[#333]">SIGN IN</h2>
            <p>Sign in to continue shopping</p>
          </div>
          <div className="grid gap-2">
            {changeLogin ? (
              <div className="phone_input">
                <PhoneInput
                  className="login_phone_number"
                  country={"bd"}
                  value=""
                  onChange={(phone) => console.log({ phone })}
                />
              </div>
            ) : (
              <div className="login_email grid gap-2">
                <input type="email" placeholder="Enter your Email" />
              </div>
            )}
            <div className="font-medium hover:underline" onClick={handelLogin}>
              <Link
                className="float-right text-[#666] hover:text-[#333]"
                href="#"
              >
                {changeLogin ? (
                  <span>Use Email Instead</span>
                ) : (
                  <span>Use Phone Instead</span>
                )}
              </Link>
            </div>
            {changeLogin ? (
              ""
            ) : (
              <div className="login_email grid gap-2">
                <input type="password" placeholder="Enter your Password" />
              </div>
            )}
            {changeLogin ? (
              <button className="btn_1 w-full" type="submit">
                GET OTP
              </button>
            ) : (
              <button className="btn_1 w-full" type="submit">
                SIGN IN
              </button>
            )}
          </div>
          <div>
            <Login_option link="/register" title="Sign Up" />
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
