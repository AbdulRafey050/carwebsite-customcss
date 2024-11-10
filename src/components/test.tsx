import React from "react";

const Test = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#1d1d2e",
        color: "#fff",
        padding: "40px",
        borderRadius: "8px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "1", paddingRight: "20px" }}>
        <h4
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "#888",
          }}
        >
          Testimonials
        </h4>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            margin: "10px 0",
          }}
        >
          What people say about our blog
        </h2>
        <p style={{ fontSize: "14px", color: "#aaa" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src="/6.png"
            alt="User"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <div>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Jonathan Vallem
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "#aaa",
              }}
            >
              New York, USA
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60px",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              backgroundColor: "#ff5b5b",
              border: "none",
              color: "#fff",
              fontSize: "18px",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            &larr;
          </button>
          <button
            style={{
              backgroundColor: "#ff5b5b",
              border: "none",
              color: "#fff",
              fontSize: "18px",
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
