import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { useState } from "react";

import "./index.css";

const uploader = Uploader({
  apiKey: "free", // Get production API keys from Upload.io
});

const options = { multi: true };

const FeedbackApp = () => {
  const [subject, setSubject] = useState("");
  const [query, setQuery] = useState("");
  const [contact, setContact] = useState("");
  const [critical, setCritical] = useState("");

  const handleSend = () => {
    setSubject("");
    setQuery("");
    setContact("");
    setCritical("");
  };

  return (
    <div className="main-container">
      <div className="top-section">
        <h1 className="header-text">Feedback Form</h1>
        <p className="head2">
          Responses to this email will be sent to hi@abc.com
        </p>
        <p className="top-bottom-text">["hi@abc.com" is customers mail id.]</p>
      </div>
      <div className="bottom-section">
        <label className="label-text" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          className="subject-input"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <label className="label-text" htmlFor="query">
          Mention your Query Here
        </label>
        <textarea
          className="query-input"
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label className="label-text">Attachments</label>
        <div className="upload-btn-section">
          <UploadButton
            uploader={uploader}
            options={options}
            onComplete={(files) =>
              alert(files.map((x) => x.fileUrl).join("\n"))
            }
          >
            {({ onClick }) => (
              <button className="upload-button" onClick={onClick}>
                Choose File
              </button>
            )}
          </UploadButton>
          <span className="note">*Images should be in JPG format.</span>
        </div>
        <div className="contact-section">
          <div className="contact">
            <label className="label-text">Contact Number</label>
            <div className="contact-container">
              <div className="country-code">
                <img
                  src="https://res.cloudinary.com/djzsbpran/image/upload/v1684647651/png-transparent-flag-of-india-flag-of-india-national-flag-flag-of-the-united-states-indian-flag-thumbnail-removebg-preview_xnkqcs.png"
                  alt="india flag"
                  className="india-flag"
                />
                <span>+91</span>
              </div>
              <input
                type="tel"
                className="tel-input"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>
          <div className="contact">
            <label className="label-text">How critical is your request?</label>
            <select
              className="select-input"
              value={critical}
              onChange={(e) => setCritical(e.target.value)}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>
        <div className="buttons-con">
          <button className="send-btn" onClick={handleSend}>
            Send
          </button>
          <button className="cancel-btn">Cancel</button>
        </div>
        <div className="footer">
          <h1 className="foot-text">AIVision Helpline : +91-9924300511</h1>
          <p className="foot-time">Mon - Fri 10:00AM - 7:00PM</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackApp;
