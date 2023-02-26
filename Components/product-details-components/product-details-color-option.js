import React, { useState } from "react";

const color_option = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="all_color_option">
        <label class=" color">
          <input type="radio" name="color" value="orange" />
          <div class="button">
            <span style={{ background: "orange" }}></span>
          </div>
        </label>

        <label class=" color">
          <input type="radio" name="color" value="amber" />
          <div class="button">
            <span style={{ background: "#fff" }}></span>
          </div>
        </label>

        <label class="color">
          <input type="radio" name="color" value="lime" />
          <div class="button">
            <span style={{ background: "lime" }}></span>
          </div>
        </label>

        <label class="color">
          <input type="radio" name="color" value="teal" />
          <div class="button">
            <span
              style={{
                background: "#f00",
              }}
            ></span>
          </div>
        </label>
      </div>
    </>
  );
};

export default color_option;
