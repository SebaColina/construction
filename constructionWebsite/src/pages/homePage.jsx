import "./homePage.css";
import { FaPencilRuler, FaStar, FaWrench } from "react-icons/fa";
import FeatureComponent from "../components/featureComponent";

function HomePage() {

  return (
    <>
    <div className="home-page">
      <section className="features">
        <h2>A reliable construction company delivering <span className="highlight">high-quality, safe, and sustainable building</span> solutions for residential and commercial projects</h2>
        <button style={{backgroundColor: "black", color: "white", border: "ridge"}}>Contact us now!</button>
        <div className="feature-block">
            <FeatureComponent icon={<FaPencilRuler />} title={"Design"} description={"Innovative designs for durable structures, smart solutions for modern construction."} color={"white"}></FeatureComponent>
            <FeatureComponent icon={<FaStar />} title={"Installation"} description={"Expert assembly for lasting quality, precision and efficiency in every build."} color={"white"}></FeatureComponent>
            <FeatureComponent icon={<FaWrench />} title={"Maintenance"} description={"Keeping your structures strong and safe, reliable upkeep for long-term durability."} color={"white"}></FeatureComponent>
        </div>
      </section>
      {/* NEW SECTION */}
      <section className="how-we-help">
          <h2>How we can help <span className="highlight">your business?</span></h2>
          <p>Construction of extraction systems, filtration of fumes, oil mists, and industrial dust in Sicily.</p>
          
          <div className="feature-block">
            <FeatureComponent icon={<FaPencilRuler />} title={"INDUSTRIAL ASPIRATION"} description={"Products • AUA • Sectors"} color={"yellow"}/>
            <FeatureComponent icon={<FaStar />} title={"HO.RE.CA. (CATERING)"} description={"Aspiration • Stainless Steel"} color={"yellow"}/>
            <FeatureComponent icon={<FaWrench />} title={"SERVICE CENTER"} description={"Metalworking"} color={"yellow"}/>
          </div>

          <div className="cta">
            <h3>Do you want to make your project come true?</h3>
            <p>Call now and get in touch with our experts.</p>
            <button className="cta-btn">Call now! →</button>
          </div>
        </section>  
    </div>
    </>
  )
}

export default HomePage
