import React from "react";

const MyComponent = ({ url }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#b1e1fc",
        marginTop: "10px",
        padding: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "8px",
      }}
    >
      <span
        style={{
          color: "black",
          fontWeight: "bold",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {url}
      </span>

      <button
        onClick={handleCopy}
        style={{
          marginLeft: "10px",
          padding: "6px 12px",
          cursor: "pointer",
        }}
      >
        Copy
      </button>
    </div>
  );
};

export default MyComponent;
