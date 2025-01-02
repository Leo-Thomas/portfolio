import React from "react";

const Intro = () => {
  const introContent = {
    image: `${process.env.PUBLIC_URL}/assets/img/slider/1.jpg`,
    name: "Leo Thomas Ramos",
    designation: "Artificial Intelligence Engineer and Researcher",
    text: (
      <>
        <p>
        Leo received the degree (magna cum laude) in Information Technology 
        Engineering with a focus on Artificial Intelligence from Yachay Tech 
        University, Ecuador, in 2023. He is currently pursuing the Ph.D. degree in 
        Computer Science with the Computer Vision Center, Universitat Autónoma de Barcelona, Spain. 
        </p>
        <p>
        He was a Research Assistant under the supervision of distinguished researchers on 
        multiple occasions. He is a Senior Research Engineer with Zeus Intelligent Solutions, 
        Houston, Texas, USA, where he is engaged in the research and development of machine 
        learning and deep learning models for various applications, with a special focus on computer 
        vision. In addition, he is an Applied Research Engineer with Kauel Inc., Silicon Valley, 
        California, USA, contributing to the development of cutting-edge intelligent systems for 
        the energy sector. 
        </p>
        <p>
        Leo's research interests span deep learning, computer vision, natural language processing, 
        and data science. In line with these interests, he collaborates with renowned researchers 
        from Venezuela, Spain, France, U.K., and the USA, including collaborations with NASA scientists.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
