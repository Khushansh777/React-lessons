import React from "react";
import { createPortal } from "react-dom";
function Clipboardverifier({value}) {
  return createPortal(
    <div>
      {value && (
        <section style={{backgroundColor:"blue"}}>
          <h1>Copied!</h1>
        </section>
      )}
    </div>
  , document.querySelector('.portal'));
}

export default Clipboardverifier;
