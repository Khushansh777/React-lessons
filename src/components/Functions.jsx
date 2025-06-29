import React from "react";

function Functions() {
  const copy = () => {
    // alert('don Copy');
    console.error("error");
  };
  return (
    <div>
      <p onCopy={copy}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque quo
        impedit vero molestiae nihil? Voluptate velit itaque enim incidunt
        dolore nesciunt eum beatae reprehenderit excepturi vitae corrupti iusto,
        eius molestiae!
      </p>
    </div>
  );
}

export default Functions;
