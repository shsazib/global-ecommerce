import React from "react";
import Modal from "react-modal";
import { BsPlusCircleDotted } from "react-icons/bs";

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
      <div id="shipping_my_btn" onClick={openModal}>
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
              <span className="pop_up_close_btn" onClick={closeModal}>&times;</span>
            </div>
            <div>
              <div className="new_address_popup_con">
                <div>
                    <label >Name</label>
                    <input placeholder=""></input>
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
