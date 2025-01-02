import React from "react";
import Social from "./Social";
import Typewriter from "typewriter-effect";

const Home = () => {
  const words = [ 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'Research & Development'];

  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/1_picture.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Leo Thomas Ramos</h3>
            <div className="typer">
            <Typewriter
              options={{
                strings: words,
                autoStart: true,
                loop: true,
                deleteSpeed: 5,
                writeSpeed: 5,
                typeSpeed: 5,
              }}/>
            </div>
            {/* 
            <p className="job">
              Senior neural networks developer and researcher, passionated for the future of AI and its applications. 
            </p>
            */}
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
