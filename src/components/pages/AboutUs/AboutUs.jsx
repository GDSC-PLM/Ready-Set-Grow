import React, { Component } from "react";
import "./styles/aboutUs.css";
import DSClogo from "../../../assets/images2/AboutUs/dscLogo.png";
import { getCoreTeam } from "../../../util/getDataHelper";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coreTeam: [],
    };
  }

  componentDidMount = async () => {
    // You can define a custom output order via the parameter
    // of getCoreTeam(), check function definition or jsdoc
    this.setState({
      coreTeam: await getCoreTeam(),  
    });
  }

  renderCoreTeam = () => {
    return (
      <div className="peopleCards">
        {this.state.coreTeam.map((person) => {
          return (
            <div className="indivCard">
              <img
                className="image"
                src={
                  person.image ||
                  "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/neil_christian_riego_aEd8xr3.png"
                }
                alt={person.name}
              ></img>

              <p className="personName">{person.name}</p>
              <p className="personPosition">{person.position}</p>
              <div className="btnDiv">
                <a className="btnProfile" href={person.googleDeveloperProfile || person.linkedIn}>View Profile</a>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <section className="about-us">
        <div className="aboutUsDesc">
          <p className="aboutUsText">About Us</p>

          <div className="orgText">
            <div className="dscPlmLogo">
              <img src={DSClogo} alt="DSCPLMlogo" />
            </div>

            <p>
              Google Developer Student Clubs – Pamantasan ng Lungsod ng Maynila
              (GDSC PLM) is a non-profit organization and a premiere student
              community of Haribons who share a common goal of uplifting the
              community through technology. GDSC PLM promotes best practices in
              the use of digital technologies on its campus with over 200
              student members.
              <br />
              <br />
              As a part of Google Developer Student Clubs (GDSC), we are helping
              students bridge the gap between theory and practice and establish
              camaraderie while continuously building each other’s career.
            </p>
          </div>
        </div>

        <div className="CoreTeam">
          <p className="coreTeamText">Meet the Core Team</p>

          {this.renderCoreTeam()}
        </div>
      </section>
    );
  }
}
