import React from "react";
import NavBar from "./NavBar"; // Import your navbar component
import waterCleaningImage from "./images/water-cleaning.jpg";
import sandBlastingImage from "./images/sand-blasting.jpg";
import tankImage from "./images/7-tank.png";
import "./CSS/HomePage.css";

function HomePage() {
  return (
    <div>
      <NavBar />
      <h1 className="main-heading">Umiya Powder Coating</h1>
      <div className="container">
        <div className="service-card">
          <img src={waterCleaningImage} alt="Water Cleaning" />
          <div className="service-info">
            <h2>Water Cleaning</h2>
            <p>
              We offer high-quality water cleaning services to ensure your water
              is safe and clean.
            </p>
          </div>
        </div>
        <div className="service-card">
          <div className="service-info">
            <h2>Sand Blasting</h2>
            <p>
              Our sand blasting services are perfect for cleaning and restoring
              various surfaces.
            </p>
          </div>
          <img src={sandBlastingImage} alt="Sand Blasting" />
        </div>
        <div className="service-card">
          <img src={tankImage} alt="7 Tank" />
          <div className="service-info">
            <h2>7 Tank</h2>
            <p>
              Our 7 tank services provide comprehensive solutions for all your
              tank needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
