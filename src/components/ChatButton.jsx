import React from "react";

const ChatButton = () => {
  return (
    <a
      href="https://wa.me/254712345678"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "65px",
        height: "65px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "32px",
        textDecoration: "none",
        boxShadow: "0 4px 10px rgba(0,0,0,.3)",
        zIndex: "9999",
      }}
    >
      💬
    </a>
  );
};

export default ChatButton;