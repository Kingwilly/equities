import React from "react";
import ContactBackgroundLocation from "../assets/images/maps/Map-of-Somerset-4-cropped.png";
import LocationBox from "../components/LocationBox";
import DocumentTitle from "react-document-title";

const Contact = () => {
  return (
    <div>
      <LocationBox
        mainHeader=""
        subHeader="Contact"
        start="Home"
        end="Contact"
      />
      <DocumentTitle title={"Contact | Melillo Equities"} />
      <div
        style={{
          background: `url(${ContactBackgroundLocation})`,
          height: 110 + "vh",
          width: 100 + "%",
          backgroundOrigin: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="map-overlay">
          <h1 className="contact-main-header">CONTACT</h1>
          <div
            style={{
              marginLeft: 10 + "vw",
            }}
          >
            <h3 className="contact-sub-header">MELILLO EQUITIES</h3>
            <br />
            <h4
              className="contact-sub-info"
              style={{ letterSpacing: 4 + "px" }}
            >
              27 ROUTE 202
              <br />
              SUITE 6<br />
              FAR HILLS, NJ 07921
            </h4>
            <br />
            <h3 className="contact-sub-header">CALL</h3>
            <a className="contact-sub-info" href="tel:19082349561">
              1+908 234 9561
            </a>
            <br />
            <h3 className="contact-sub-header">EMAIL</h3>
            <a
              className="contact-sub-info"
              href="mailto:ir@MelilloEquities.com"
              style={{ paddingBottom: 25 }}
            >
              ir@MelilloEquities.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
