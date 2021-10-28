import React from 'react';
import "../styles/sponsors.css";

import buoyr from  "../../../../assets/images/png/BuoyrDark.png";
import dataCampDonates from  "../../../../assets/images/png/DataCampDonate.png";
import dgy from  "../../../../assets/images/png/DGYAcademy.png";
import edukasyonPH from  "../../../../assets/images/png/EdukasyonPH.png";
import franchiseManila from  "../../../../assets/images/png/FranchiseManila.png";
import kadaKareer from  "../../../../assets/images/png/KadaKareer.png";

const Sponsors = () => {
    return (
        <section className="sponsors">

            <div className="sponsors-container">
                <div className="section-header">
                    <h3>SPONSORED AND CO-PRESENTED BY:</h3>
                </div>

                <div className="sponsor-logos">
                    <div className="sponsor-logo">
                        <img src={buoyr} alt="Buoyr" className="buoyr"/>
                    </div>

                    <div className="sponsor-logo">
                        <img src={dataCampDonates} alt="Data Camp Donates" className="datacamp"/>
                    </div>

                    <div className="sponsor-logo">
                        <img src={dgy} alt="DGY Academy" className="dgy"/>
                    </div>

                    <div className="sponsor-logo">
                        <img src={franchiseManila} alt="Franchise Manila" className="franchise-manila"/>
                    </div>

                    <div className="sponsor-logo">
                        <img src={edukasyonPH} alt="Edukasyon PH" className="edukasyon-ph"/>
                    </div>

                    <div className="sponsor-logo">
                        <img src={kadaKareer} alt="KadaKareer" className="kada-kareer"/>
                    </div>

                </div>
            </div>
            
        </section>
    )
}

export default Sponsors
