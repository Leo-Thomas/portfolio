import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "../../components/Home";
import About from "../../components/about/AboutMain";
import Contact from "../../components/Contact";
import CopyRight from "../../components/CopyRight";
import PageTitle from "../../components/PageTitle";
import Publications from "../../components/Publications";

const HomeLight = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkModeEnabled", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <PageTitle title="Portfolio" />
      {/* End page title for seo */}

      <button className="theme-switcher-label" onClick={toggleDarkMode}>
        {isDarkMode ? (
          <>
            <FaSun />
          </>
        ) : (
          <>
            <FaMoon />
          </>
        )}
      </button>

      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <Tab style={{listStyleType: 'none'}}>
                  <img src={`${process.env.PUBLIC_URL}/assets/img/logo/dark.png`} alt="brand" />
                </Tab>
              </div>
              {/* END LOGO */}

              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src={`${process.env.PUBLIC_URL}/assets/img/svg/home-run.svg`}
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src={`${process.env.PUBLIC_URL}/assets/img/svg/avatar.svg`}
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src={`${process.env.PUBLIC_URL}/assets/img/svg/paper.svg`}
                      alt="paper"
                    />
                    <span className="menu_content">Research</span>
                  </Tab>
                  
                  <Tab>
                    <img
                      className="svg"
                      src={`${process.env.PUBLIC_URL}/assets/img/svg/mail.svg`}
                      alt="mail"
                    />
                    <span className="menu_content">Contact</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}

              <CopyRight />
              {/* END COPYRIGHT */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">             
              <TabPanel>
                <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                  <Home />
                </div>
              </TabPanel>
              {/* END HOME MENU TAB CONTENT */}

              <TabPanel>
                <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                  <About />
                </div>
              </TabPanel>
              {/* END ABOUT MENU TAB CONTENT */}

              {/* END ABOUT MENU TAB CONTENT */}

              <TabPanel>
              <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                <Publications />
              </div>
              </TabPanel>
              {/* END NEWS MENU TAB CONTENT */}

              <TabPanel>
              <div data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
                  <Contact />
                </div>
              </TabPanel>
              {/* END CONTACT MENU TAB CONTENT */}
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
