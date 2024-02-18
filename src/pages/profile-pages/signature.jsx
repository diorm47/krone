import React from "react";
import "./profile-pages.css";

function Signature() {
  return (
    <div className="signature_page">
      <textarea className="signature_page_textarea" placeholder="Впишите свою подпись..."></textarea>
      <button className="save_btn">Сохранить</button>
    </div>
  );
}

export default Signature;
