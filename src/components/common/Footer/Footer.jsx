import React, { Component } from "react";
import "./styles/footer.css";

//import { ReactComponent as DataCampDonatesLogo } from "../../../assets/images2/Footer/svg/GDSC and Datacamp.svg"
import DataCampDonatesLogo1 from "../../../assets/images2/Footer/png/GDSC and Datacamp.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ReactComponent as DSCLogo } from "../../../assets/images2/Footer/svg/DSCLogo.svg";
import BottomBars from "../../../assets/images2/Footer/png/Footer_GDSC_Branding_Colors.png";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="firstLine">
          <img src={DataCampDonatesLogo1} />
        </div>

        <div className="socMedIcons">

          <div className="media-screen-up">

            <a
                href="https://www.facebook.com/gdsc.plm"
                target="_blank"
                className="margin-spacing"
              >
                <FaFacebook className="socMedIconsIndiv" />
            </a>
              <a
                href="https://www.linkedin.com/company/gdsc-plm/mycompany/"
                target="_blank"
                className="margin-spacing"
              >
                <BsLinkedin className="socMedIconsIndiv BsLinkedin" />
              </a>


            <a
              href="https://gdsc.community.dev/pamantasan-ng-lungsod-ng-maynila/"
              target="_blank"
              className="margin-spacing"
            >
              <DSCLogo className="DSCLogo" />
            </a>

            <a
              href="https://twitter.com/gdsc_plm"
              target="_blank"
              className="margin-spacing"
            >
              <AiFillTwitterCircle className="socMedIconsIndiv AiFillTwitterCircle" />
            </a>
          </div >

            <div className="media-screen-down">
              <a
                href="https://www.instagram.com/gdsc_plm/"
                target="_blank"
                className="margin-spacing ig-icon"
              >
                <FaInstagram className="socMedIconsIndiv" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC1Jd3Cb99nMdCp9_VHIWeag"
                target="_blank"
                className="margin-spacing yt-icon"
              >
                <FaYoutube className="socMedIconsIndiv " />
              </a>

              <a
                href="https://github.com/GDSC-PLM"
                target="_blank"
                className="margin-spacing github-icon "
              >
                <FaGithub className="socMedIconsIndiv  " />
              </a>
              <a
                href="https://discord.gg/F6UjYff3Tm"
                target="_blank"
                className="margin-spacing discord-icon"
              >
                <FaDiscord className="socMedIconsIndiv" />
              </a>
              
            </div>
        </div>

 

        <p>Copyright © 2021. GDSC- PLM. All rights Reserved</p>

        <div className="lastLine">
          <img src={BottomBars} />
        </div>
       
      </footer>
    );
  }
}