import React from "react";
import Modal from "react-modal";
import { BsPlusCircleDotted } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const checkout_popup = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <div id="shipping_my_btn" className="rounded" onClick={openModal}>
        <BsPlusCircleDotted className="new_address_icon" />
        <p>Add New Address</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        {/* <!-- The Modal --> */}
        <div>
          <div>
            <div className="pop_up_heading">
              <h2>New Address</h2>
              <span className="pop_up_close_btn" onClick={closeModal}>
                &times;
              </span>
            </div>
            <div>
              <div className="new_address_popup_con">
                <div className="flex gap-4">
                  <div className="grid">
                    <label>Name</label>
                    <input placeholder="Name"></input>
                  </div>
                  <div className="grid">
                    <label>Email</label>
                    <input placeholder="Email"></input>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="grid">
                    <label>Phone</label>
                    <div className="checkout_phone_input">
                      <PhoneInput
                        country={"bd"}
                        value=""
                        onChange={(phone) => console.log({ phone })}
                      />
                    </div>
                  </div>

                  <div className="grid">
                    <label>Country</label>
                    <input placeholder="Country"></input>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="grid">
                    <label>State</label>
                    <input placeholder="State"></input>
                  </div>
                  <div className="grid">
                    <label>City</label>
                    <input placeholder="City"></input>
                  </div>
                </div>
                <div className="grid">
                  <label>Postal Code</label>
                  <input placeholder="Postal Code"></input>
                </div>
                <div className="grid">
                  <label>Address</label>
                  <textarea placeholder="Address"></textarea>
                </div>
              </div>
              <button className="btn_1 checkout_address_btn">Save</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default checkout_popup;
