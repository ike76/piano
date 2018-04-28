import React from "react";

const Page = p => {
  return (
    <div>
      {p.page.jsx}
      <button>{p.page.buttonText}</button>
    </div>
  );
};

export default Page;
