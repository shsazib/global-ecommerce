import React, { useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Login_option from "@/Components/login-option/login_option";

const register = () => {
  const [changeLogin, setChangeLogin] = useState();

  const handelLogin = () => {
    setChangeLogin(!changeLogin);
  };

  return (
    <>
      <div className="login_section">
        <div className=" login_content">
          <div className="grid gap-2">
            <h2 className="text-[25px] font-medium text-[#333]">SIGN UP</h2>
            <p>Sign up to continue shopping</p>
          </div>
          <div className="grid gap-2">
            <div className="login_email grid gap-2">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="login_email grid gap-2">
              <input type="text" placeholder="Last Name" />
            </div>
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
              <div className="grid gap-2">
                <div className="login_email grid gap-2">
                  <input type="password" placeholder="Password" />
                </div>
                <div className="login_email grid gap-2">
                  <input
                    type="password"
                    placeholder="Confirmed your Password"
                  />
                </div>
              </div>
            )}
            {changeLogin ? (
              <button className="btn_1 w-full" type="submit">
                GET OTP
              </button>
            ) : (
              <button className="btn_1 w-full" type="submit">
                SIGN UP
              </button>
            )}
          </div>
          <div>
            <Login_option link="/login" title="Sign In" />
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
