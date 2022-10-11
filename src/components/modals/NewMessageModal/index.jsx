import React from "react";
import { Input, InputWithVis, Button, SearchInput } from "../..";

export const NewMessageModal = ({ closeModal, isOpen }) => (
  <div
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      display: isOpen ? "flex" : "none",
      top: 0,
      left: 0,
    }}
    className="center z"
    onClick={() => closeModal(false)}
  >
    <div
      style={{ width: "60vw", height: 610 }}
      className="bg-white z "
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="managemodal">
        <div className="mana">
          <h4>New Message</h4>
          <button onClick={() => closeModal(false)} className="bad">
            <img src="./images/bad.svg" />
          </button>
        </div>
      </div>
      <div
        style={{
          padding: "40px 0px",

          height: "80%",
        }}
      >
        <div
          style={{ padding: "0 32px", height: "100%" }}
          className="flex-col justify-between"
        >
          <div style={{ padding: "0 17%", height: 350 }}>
            <SearchInput />
            <MessagesList />
          </div>
          <div
            className="flex justify-end"
            style={{
              columnGap: 24,
              marginTop: 30,
              paddingTop: 34,
              borderTop: "1px solid rgba(219, 226, 223, 1)",
            }}
          >
            <Button
              title="Next"
              classes="bg-grey1 fg-white br-4"
              btnStyles={{ padding: "15px 84px" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MessagesList = () => {
  return (
    <ul
      style={{
        marginTop: 33,
        height: "80%",
        // backgroundColor: "red",
        overflowY: "auto",
      }}
    >
      {[1, 2, 3, 4].map((message, idx) => (
        <LastMessage key={idx} />
      ))}
    </ul>
  );
};

const LastMessage = () => {
  return (
    <li
      className="flex align-center pointer hover"
      style={{ columnGap: 16, marginBottom: 25 }}
    >
      <div>
        <img src="/images/avatar.svg" style={{ width: 48, height: 48 }} />
      </div>
      <div>
        <h3 className="f16 fg-grey1 fw500 " style={{ marginBottom: 8 }}>
          Precious Malachy
        </h3>
        <p className="f12 fg-grey4">See you next year</p>
      </div>
    </li>
  );
};
