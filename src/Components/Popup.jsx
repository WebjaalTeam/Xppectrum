import React, { useState } from "react";
import "./Popup.css";

export default function FormPopup() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button className="open-popup-btn" onClick={() => setOpen(true)}>
        Let's Talk
      </button>

      {/* Popup Overlay */}
      {open && (
        <div className="popup-overlay" onClick={() => setOpen(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <span className="close-x" onClick={() => setOpen(false)}>✖</span>
            <h2>Let's Elevate Your Brand
            <span>Get in Touch Today!</span></h2>
            <div className="form-container">
            <img src='/Xppectrum//letsconnect.png' alt='Connect with Xppectrum' style={{height:"260px",width:"260px",marginTop:"-20px"}} />
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone Number" />

              <select>
                <option value="" disabled selected>Purpose</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app-development">Mobile App Development</option>
              </select>

              <button type="submit">Submit</button>
            </form>
          </div>
            </div>
        </div>
      )}
    </>
  );
}
