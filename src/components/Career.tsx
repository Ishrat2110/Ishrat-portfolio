import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern – Remote Sensing & GIS</h4>
                <h5>Punjab Remote Sensing Center, India</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Integrated Sentinel-2 multispectral imagery, GIS layers, and GPS-referenced
              field data for river and watershed analysis. Processed large spatial datasets
              to generate hydrological and land-use maps, delivering decision-ready
              geospatial outputs to government stakeholders.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern – Soil & Water Conservation</h4>
                <h5>Department of Soil & Water Conservation, Chandigarh</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Collected and integrated field temperature, crop growth, and soil property
              data to support Growing Degree Days estimation and phenology-based crop
              monitoring. Supported conservation planning using field-derived agronomic
              data to inform erosion control and sustainable land management.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Engineering Intern</h4>
                <h5>Punjab Agricultural Mechanization Centre, India</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Led a 24-member team to design and fabricate a fully automated
              multi-vegetable transplanter. Evaluated system performance through
              multi-day field trials and analyzed planting accuracy using field-collected
              agronomic data to generate producer recommendations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduate Research Assistant</h4>
                <h5>University of Nebraska–Lincoln</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing image-based ML models for early-season weed detection achieving
              0.86 F1-score. Designed wearable sensor systems for cattle methane and CO₂
              emissions monitoring. Built time-series ML models predicting heat stress in
              cattle with 87.9% accuracy and AUC of 0.945.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
