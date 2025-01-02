import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const Publications = () => {
  return (
    <>
      <div className="container">
        <div className="tokyo_tm_news">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>News</span>
                <h3>Research</h3>
              </div>
            </div>
          </div>
          {/* END TITLE */}
          <ul>

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open(" ", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/021.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/021.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      Accepted: V International Conference on Computer Science, Electronics and Industrial Engineering (CSEI)
                      </span>
                      <span>2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open(" ", "_blank")}>
                    An Exploratory Data Analysis of the Ecuadorian Security Crisis: Insights from 2021 and 2022                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open(" ", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("https://ieeexplore.ieee.org/document/10475866", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/020.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/020.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      8th International Conference on Mathematics and Computers in Sciences and Industry (MCSI)
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("https://ieeexplore.ieee.org/document/10475866", "_blank")}>
                  A Digital System Proposal for Streamlined Consultations of Ecuador's Comprehensive Penal Code
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("https://ieeexplore.ieee.org/document/10475866", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open(" ", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/019.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/019.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      Accepted: 4th International Conference of Information Systems and Software Technologies (ICI2ST)
                      </span>
                      <span>2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open(" ", "_blank")}>
                  A Comparative Exploration of PCA Variants for Clustering Analysis
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open(" ", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open(" ", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/018.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/018.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      SUBMITTED
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open(" ", "_blank")}>
                  Sonar Signal Classification through Dimensionality Reduction and Artificial Intelligence
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open(" ", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open(" ", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/017.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/017.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      SUBMITTED
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open(" ", "_blank")}>
                  Development of a Wildfire Detection and Monitoring Solution Using Computer Vision
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open(" ", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open(" ", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/016.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/016.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      SUBMITTED
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open(" ", "_blank")}>
                  A Computational Framework for Knowledge Curation Using Natural Language Processing Techniques
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open(" ", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open(" ", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/015.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/015.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      Accepted: SN Computer Science
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open(" ", "_blank")}>
                  A Semiautomatic Image Processing-based Method for Binary Segmentation of Lungs in Computed Tomography Images
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open(" ", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("https://link.springer.com/article/10.1007/s11042-024-18925-2", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/014.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/014.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      Multimedia Tools and Applications
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("https://link.springer.com/article/10.1007/s11042-024-18925-2", "_blank")}>
                  Continual Learning, Deep Reinforcement Learning and Microcircuits: A Novel Method for Clever Game Playing
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("https://link.springer.com/article/10.1007/s11042-024-18925-2", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("https://link.springer.com/article/10.1007/s41870-024-01891-1", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/013.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/013.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      International Journal of Information Technology
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("https://link.springer.com/article/10.1007/s41870-024-01891-1", "_blank")}>
                  Automating Case Assessment in Ecuador’s Legal System: A Web-Based Application for COIP Consultation
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("https://link.springer.com/article/10.1007/s41870-024-01891-1", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open(" ", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/012.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/012.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      SUBMITTED
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open(" ", "_blank")}>
                  Stance-EC: A Spanish-language Data Set on Polarized Twitter Conversations About the 2022 Protests in Ecuador
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open(" ", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("https://www.joig.net/show-89-386-1.html", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/011.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/011.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      Journal of Image and Graphics
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("https://www.joig.net/show-89-386-1.html", "_blank")}>
                  YOLOv5 vs. YOLOv8: Performance Benchmarking in Wildfire and Smoke Detection Scenarios
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("https://www.joig.net/show-89-386-1.html", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("https://doi.org/10.1016/j.array.2024.100351", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/010.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/010.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      Array
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("https://doi.org/10.1016/j.array.2024.100351", "_blank")}>
                  A Comparative Study of YOLOv5 and YOLOv8 for Corrosion Segmentation Tasks in Metal Surfaces
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("https://doi.org/10.1016/j.array.2024.100351", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("https://doi.org/10.1016/j.aiia.2024.05.003", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/009.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/009.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      Artificial Intelligence in Agriculture
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("https://doi.org/10.1016/j.aiia.2024.05.003", "_blank")}>
                  Hyperparameter Optimization of YOLOv8 for Smoke and Wildfire Detection: Implications for Agricultural and Environmental Safety
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("https://doi.org/10.1016/j.aiia.2024.05.003", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("https://ieeexplore.ieee.org/document/10540120", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/008.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/008.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      IEEE Access
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("https://ieeexplore.ieee.org/document/10540120", "_blank")}>
                  An End-to-End Platform for Managing Third-party Risks in Oil Pipelines
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("https://ieeexplore.ieee.org/document/10540120", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("https://link.springer.com/article/10.1007/s11042-024-18685-z", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/007.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/007.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      Multimedia Tools and Applications
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("https://link.springer.com/article/10.1007/s11042-024-18685-z", "_blank")}>
                  Computer Vision for Wildfire Detection: A Critical Brief Review
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("https://link.springer.com/article/10.1007/s11042-024-18685-z", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open(" ", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/006.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/006.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                        SUBMITTED
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open(" ", "_blank")}>
                    Synthetic Generated Data for Intelligent Corrosion Classification in Oil and Gas Pipelines
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open(" ", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open(" ", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/005.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/005.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                        SUBMITTED
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open(" ", "_blank")}>
                  A Brief Landscape of Artificial Intelligence Applications in Security Operations
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open(" ", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */} 

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open(" ", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/004.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/004.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                        SUBMITTED
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open(" ", "_blank")}>
                  Multi-Objective Benchmark for Optimal Urban Electric Vehicle Charging Station Placement
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open(" ", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}  

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open(" ", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/003.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/003.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                        SUBMITTED
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open(" ", "_blank")}>
                  Multispectral Semantic Segmentation for Land Cover Classification: An Overview
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open(" ", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open(" ", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/002.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/002.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                        SUBMITTED
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open(" ", "_blank")}>
                  Advanced Galápagos Bird Identification: Dataset, Benchmarking, and Application Development                 
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open(" ", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open(" ", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/001.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/001.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                        SUBMITTED
                      </span>
                      <span>2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open(" ", "_blank")}>
                  Leaf Disease Detection Using YOLO: A Comparative Study                  
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open(" ", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("http://dx.doi.org/10.1109/ACCESS.2023.3312217", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/1.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/1.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}
                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{fontWeight: 800}}>IEEE Access</span>
                      <span>01 September 2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("http://dx.doi.org/10.1109/ACCESS.2023.3312217", "_blank")}>
                  Assessing the Effectiveness of YOLO Architectures for Smoke and Wildfire Detection
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("http://dx.doi.org/10.1109/ACCESS.2023.3312217", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
                {/* END DETAILS */}
              </div>
            </li>
            {/* END SINGLE BLOG */}

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("http://dx.doi.org/10.1109/ACCESS.2024.3356551", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/2.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/2.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{fontWeight: 800}}>IEEE Access</span>
                      <span>January 2024</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("http://dx.doi.org/10.1109/ACCESS.2024.3356551", "_blank")}>
                    A Study of ConvNeXt Architectures for Enhanced Image Captioning </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("http://dx.doi.org/10.1109/ACCESS.2024.3356551", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("http://dx.doi.org/10.1007/s42452-023-05587-2", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/3.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/3.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}
                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                        SN Applied Science
                      </span>
                      <span>13 December 2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("http://dx.doi.org/10.1007/s42452-023-05587-2", "_blank")}>
                    Artificial intelligence and sustainability in the fashion industry: a review from 2010 to 2022
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("http://dx.doi.org/10.1007/s42452-023-05587-2", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
                {/* END DETAILS */}
              </div>
            </li>
            {/* END SINGLE BLOG */}

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("http://dx.doi.org/10.1016/j.softx.2023.101611", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/4.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/4.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span href="#" style={{ fontWeight: 800 }}>
                        SoftwareX
                      </span>
                      <span>12 December 2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("http://dx.doi.org/10.1016/j.softx.2023.101611", "_blank")}>
                    SustainMeter: A knowledge-based system for assessing sustainability of SMEs in the fashion industry
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("http://dx.doi.org/10.1016/j.softx.2023.101611", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("http://dx.doi.org/10.1007/978-3-031-45438-7_1", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/5.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/5.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                      TICEC 2023
                      </span>
                      <span>06 October 2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("http://dx.doi.org/10.1007/978-3-031-45438-7_1", "_blank")}>
                    Uncovering the Effects of the Russia-Ukraine Conflict on Cryptocurrencies: A Data-Driven Analysis with Clustering and Biplot Techniques
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("http://dx.doi.org/10.1007/978-3-031-45438-7_1", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("http://dx.doi.org/10.15359/ru.37-1.23", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/6.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/6.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                        Uniciencia
                      </span>
                      <span>01 June 2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("http://dx.doi.org/10.15359/ru.37-1.23", "_blank")}>
                    Sentiment Analysis of Russia-Ukraine Conflict Tweets Using RoBERTa
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("http://dx.doi.org/10.15359/ru.37-1.23", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("http://dx.doi.org/10.1007/978-3-031-24985-3_16", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/7.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/7.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                        ICAT 2022
                      </span>
                      <span>28 January 2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("http://dx.doi.org/10.1007/978-3-031-24985-3_16", "_blank")}>
                    U-Net vs. TransUNet: Performance Comparison in Medical Image Segmentation
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("http://dx.doi.org/10.1007/978-3-031-24985-3_16", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("http://dx.doi.org/10.1109/ACCESS.2023.3331316", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/8.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/8.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                        IEEE Access
                      </span>
                      <span>08 November 2023</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("http://dx.doi.org/10.1109/ACCESS.2023.3331316", "_blank")}>
                    EngineFaultDB: A Novel Dataset for Automotive Engine Fault Classification and Baseline Results
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("http://dx.doi.org/10.1109/ACCESS.2023.3331316", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}

            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
              <div className="list_inner">
                <div className="image" onClick={() => 
                  window.open("http://dx.doi.org/10.1109/ETCM56276.2022.9935736", "_blank")}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/publications/9.png`} alt="thumb" />
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/publications/9.png)`,
                    }}
                  ></div>
                </div>
                {/* END IMAGE */}

                <div className="details">
                  <div className="extra">
                    <p className="date">
                      <span style={{ fontWeight: 800 }}>
                        IEEE Sixth ETCM 2022
                      </span>
                      <span>01 October 2022</span>
                    </p>
                  </div>
                  {/* END EXTRA */}

                  <h3 className="title" onClick={() => window.open("http://dx.doi.org/10.1109/ETCM56276.2022.9935736", "_blank")}>
                    Lung Segmentation Pipeline for CT Images
                  </h3>
                  <div className="tokyo_tm_read_more">
                    <a onClick={() => window.open("http://dx.doi.org/10.1109/ETCM56276.2022.9935736", "_blank")}>
                      <span>Read More</span>
                    </a>
                  </div>
                  {/* END READ MORE BUTTON */}
                </div>
              </div>
              {/* END LIST INNER */}
            </li>
            {/* END SINGLE BLOG */}
        
          </ul>
        </div>
      </div>
    </>
  );
};

export default Publications;
