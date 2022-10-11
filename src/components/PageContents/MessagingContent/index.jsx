import React, { useEffect, useRef, useState } from "react";
import { Button, NewMessageModal, SearchInput } from "../..";
import { socket } from "../../../config/socket.config";

export const MessagingContent = () => {
  const [newMessageModalIsOpen, setNewMessageModalIsopen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <>
      <div className="flex" style={{ columnGap: 8 }}>
        <section
          style={{
            marginBottom: 18,
            padding: "38px 0px",
            flex: 0.3,
            height: "90vh",
          }}
          className="bg-white"
        >
          <header
            className="flex justify-between"
            style={{
              padding: "0 24px 27px 24px",
              borderBottom: "1px solid rgba(219, 226, 223, 1)",
              marginBottom: 24,
            }}
          >
            <h2 className="f18 fg-dark1 fw500">Send Message</h2>
            <button
              className="transparent f14"
              style={{
                color: "rgba(64, 145, 108, 1)",
                border: "none",
                borderBottom: "1px solid rgba(64, 145, 108, 1)",
              }}
            >
              Send to all
            </button>
          </header>
          <div style={{ padding: "2px 24px" }}>
            <SearchInput />
          </div>
          <div style={{ height: "100%" }} className={!true ? "" : "center"}>
            {!true ? (
              <MessagesList />
            ) : (
              <p className="fg-grey2">No message yet</p>
            )}
          </div>
        </section>
        {true ? (
          <SendGroupMessageView newMessage={message} />
        ) : (
          <SelectMessageView openModal={setNewMessageModalIsopen} />
        )}
      </div>
      <NewMessageModal
        isOpen={newMessageModalIsOpen}
        closeModal={setNewMessageModalIsopen}
      />
    </>
  );
};

const SelectMessageView = ({ openModal }) => {
  return (
    <section
      style={{ flex: 0.7, height: "90vh", paddingLeft: 129 }}
      className="bg-white flex align-center"
    >
      <div className="" style={{ padding: "40px 32px" }}>
        <h2 className="f24 fw700">Select a message</h2>
        <p style={{ marginTop: 16, width: 325 }}>
          Choose from your existing conversations or start a new one.
        </p>
        <div style={{ marginTop: 24 }}>
          <Button
            title="StartConversation"
            classes="bg-grey1 fg-white br-4"
            style={{ padding: "17px 32px" }}
            onClick={() => openModal(true)}
          />
        </div>
      </div>
    </section>
  );
};

const SendGroupMessageView = ({}) => {
  const [messages, setMessages] = useState([1, 2, 4, 5, 6, 4]);
  const [newMessage, setNewMessage] = useState("");
  const messageEndRef = useRef();

  const scrollToBottom = () => {
    messageEndRef?.current.scrollIntoView({ behavior: "smooth" });
  };
  const sendMessage = () => {
    socket.emit("new_message", newMessage);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <section style={{ flex: 0.7, height: "90vh" }} className="bg-white">
      <header
        style={{
          padding: "34px 32px",
          height: 88,
          borderBottom: "1px solid rgba(219, 226, 223, 1)",
        }}
      >
        <h3 className="f16 fg-dark1">
          Emmanuel James, Emmanuel James, Emmanuel James{" "}
        </h3>
      </header>
      <div className="flex-col justify-between group-chat-wrapper relative">
        <main style={{ height: "100%", overflowY: "auto" }}>
          <ul style={{ marginTop: 20 }}>
            {messages.map((message, idx) =>
              idx % 2 ? <SentMessage /> : <ReceivedMessage />
            )}
          </ul>
          <div ref={messageEndRef} />
        </main>
        <div
          style={{
            padding: "34px 32px",
            // height: "100%",
            borderTop: "1px solid rgba(219, 226, 223, 1)",
          }}
          className="flex-col justify-end"
        >
          <div>
            <textarea
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
              style={{
                width: "100%",
                border: "1px solid rgba(219, 226, 223, 1)",
                padding: 10,
                display: "flex",
                // flex: 1,
              }}
              rows={5}
              placeholder="Type a message here"
            />
          </div>
          <div className="flex justify-between" style={{ marginTop: 28 }}>
            <img src="/images/attach.svg" className="pointer hover" />
            <img
              src="/images/send.svg"
              className="pointer hover"
              // onClick={() =>
              //   setMessages([Math.round(Math.random() * 10), ...messages])
              // }
              onClick={sendMessage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SentMessage = () => (
  <li
    style={{
      marginRight: 24,
      marginTop: 10,
      marginBottom: 15,
      columnGap: 12,
    }}
    className="flex justify-end"
  >
    <div style={{ maxWidth: "70%" }}>
      <p
        className="flex justify-end align-center"
        style={{ marginBottom: 12, columnGap: 12, marginTop: 6 }}
      >
        <span className="fg-dark3 f10">30 mmins ago</span>
        <span className="fg-dark1 f12 fw500">Emmanuel Jacob</span>
      </p>
      <p
        className="bg-grey1 fg-white f12 br-4"
        style={{ padding: 16, lineHeight: 1.7 }}
      >
        Okay, Can I also make use of the textbook that was attached to the
        workbook becaus ei am finding it difficult to comprehend, but it is not
        allowed I dont mind using the internet as well.
      </p>
    </div>
    <div>
      <img src="/images/avatar.svg" width={24} />
    </div>
  </li>
);
const ReceivedMessage = () => (
  <li
    style={{
      marginLeft: 24,
      marginTop: 10,
      marginBottom: 15,
      columnGap: 12,
      flexDirection: "row-reverse",
    }}
    className="flex justify-end"
  >
    <div style={{ maxWidth: "70%" }}>
      <p
        className="flex align-center"
        style={{
          marginBottom: 12,
          columnGap: 12,
          marginTop: 6,
          flexDirection: "row-reverse",
          justifyContent: "flex-end",
        }}
      >
        <span className="fg-dark3 f10">30 mmins ago</span>
        <span className="fg-dark1 f12 fw500">Emmanuel Jacob</span>
      </p>
      <p
        className="fg-dark2 fg-white f12 br-4"
        style={{
          padding: 16,
          lineHeight: 1.7,
          backgroundColor: "rgba(247, 247, 250, 1)",
        }}
      >
        Okay, Can I also make use of the textbook that was attached to the
        workbook becaus ei am finding it difficult to comprehend, but it is not
        allowed I dont mind using the internet as well.
      </p>
    </div>
    <div>
      <img src="/images/avatar.svg" width={24} />
    </div>
  </li>
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
      className="flex justify-between pointer align-center hover-grey"
      style={{ columnGap: 16, marginBottom: 5, padding: "10px 24px" }}
    >
      <div className="flex align-center" style={{ columnGap: 16 }}>
        <div>
          <img src="/images/avatar.svg" style={{ width: 48, height: 48 }} />
        </div>
        <div>
          <h3 className="f16 fg-grey1 fw500 " style={{ marginBottom: 8 }}>
            Precious Malachy
          </h3>
          <p className="f12 fg-grey4">See you next year</p>
        </div>
      </div>
      <div>
        <p className="f12 fg-grey4" style={{ marginBottom: 9 }}>
          MAy 34
        </p>
        <div className="justify-end flex">
          <div
            style={{
              width: 5,
              height: 5,
              backgroundColor: "rgba(64, 145, 108, 1)",
              borderRadius: 100,
            }}
          />
        </div>
      </div>
    </li>
  );
};
