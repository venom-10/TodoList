import React from "react";

function Li(p) {
  return (
    <div
      onClick={() => {
        p.onChecked(p.id);
      }}
    >
      <li>{p.item}</li>
    </div>
  );
}

export default Li;
