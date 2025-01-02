import React from "react";
import Modal from "react-modal";
import Testimonial from "./Testimonial";
import Intro from "./Intro";
import KnowledgeInterest from "./KnowledgeInterest";
import PersonalInfo from "./PersonalInfo";
import Resume from "./Resume";
import Skills from "./Skills";
import PeerReviews from "./PeerReviews";
import CoursesCertifications from "./CoursesCertifications";
import Services from "../service/Services";
import Hobbies from "./Hobbies";

Modal.setAppElement("#root");

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="tokyo_tm_about">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
                <h3>About Me</h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <Intro />
          <div className="tokyo_tm_short_info">
            <PersonalInfo />
          </div>
          {/* End personal info */}

          <div className="tokyo_tm_button" data-position="left">
          <a href={`${process.env.PUBLIC_URL}/assets/img/cv.pdf`} download>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="tokyo_tm_resumebox">
        <div className="container">
          <div className="in">
            <Resume />
          </div>
        </div>
      </div>
      {/* End tokyo_tm_resumebox */}

      <div className="tokyo_tm_skillbox">
        <div className="container">
          <div className="in">
            <KnowledgeInterest />
          </div>
        </div>
      </div>
      {/* End .tokyo_tm_skillbox */}

      <div className="tokyo_tm_progressbox">
        <div className="container">
          <div className="in">
            <Skills />
          </div>
          {/* End in */}
        </div>
        {/* End .container */}
      </div>
      {/* End tokyo_tm_progressbox */}

      {/* RESEARCH GROUPS */}
      <div className="container">
        <div className="tokyo_tm_services">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <h3>Research Groups</h3>
              </div>
            </div>
          </div>
          {/* End tokyo_tm_title */}
          <div className="list">
            <ul>
              <Services />
            </ul>
          </div>
          {/* End list */}
        </div>
      {/* End .container */}

      {/* PEER REVIEW */}
        <div className="tokyo_tm_services">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <h3>Peer Review Activities</h3>
              </div>
            </div>
          </div>
          {/* End tokyo_tm_title */}
          <div className="list">
            <ul>
              <PeerReviews />
            </ul>
          </div>
          {/* End list */}
        </div>
      </div>
      {/* End .container */}

      {/* COURSES AND CERTIFICATIONS */}
      <div className="tokyo_tm_progressbox">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <h3>Courses & Certifications</h3>
          </div>
        </div>
        <div className="tokyo_tm_certificate_list">
          <CoursesCertifications />
        </div>
      </div>
      {/* End .tokyo_tm_skillbox */}


      <div className="tokyo_tm_testimonials">
        <div className="container">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <h3>Achievements, Honours & Awards</h3>
            </div>
          </div>
          <div className="list">
            <Testimonial />
          </div>
        </div>
      </div>
      {/* End tokyo_tm_testimonials */}

      {/* COURSES AND CERTIFICATIONS */}
      <div className="tokyo_tm_partners">
        <div className="container">
          <div className="tokyo_section_title">
            <h3>Hobbies & Interests</h3>
          </div>
          <div className="partners_inner">
            <Hobbies />
          </div>
        </div>
      </div>
      {/* End .tokyo_tm_skillbox */}
    </>
  );
};

export default AboutMain;
