import React from "react";

const contact = () => {
  return (
    <>
      <div className="contact_container content_container">
        <div className="message_input grid gap-5">
          <h2>Send A Message</h2>
          <div className="grid  gap-5">
            <div className="grid  gap-1">
              <label for="name">Name</label>
              <input id="name" placeholder="Name" />
            </div>
            <div className="grid  gap-1">
              <label for="email">Email</label>
              <input id="email" placeholder="email" />
            </div>
            <div className="grid  gap-1">
              <label for="subject">Subject</label>
              <input id="subject" placeholder="Subject" />
            </div>
            <div className="grid  gap-1">
              <label for="message">Message</label>
              <textarea id="message" placeholder="Message" />
            </div>
          </div>
        <button className="btn_1">SEND</button>
        </div>
        <div className="message_content">
          <h2>Reach On Us</h2>
        </div>
      </div>
    </>
  );
};

export default contact;
