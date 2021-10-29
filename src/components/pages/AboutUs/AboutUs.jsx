import React, { Component } from "react";
import "./styles/aboutUs.css";

export default class AboutUs extends Component {
  render() {
    return (
        <section className="about-us">
            <h1>About Us</h1>
            
            <p>
            Google Developer Student Clubs – Pamantasan ng Lungsod ng Maynila (GDSC PLM) is a
            non-profit organization and a premiere student community of Haribons who share a common goal
            of uplifting the community through technology. GDSC PLM promotes best practices in the use of
            digital technologies on its campus with over 200 student members.
            <br />
            <br />
            As a part of Google Developer Student Clubs (GDSC), we are helping students bridge the gap
            between theory and practice and establish camaraderie while continuously building each other’s
            career.
            </p>
        </section>
    );
  }
}