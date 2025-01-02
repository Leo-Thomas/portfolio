import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";

Modal.setAppElement("#root");

const PeerReview = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
    e.preventDefault();
  }

  const serviceContent = [
    {
      id: 7,
      title: "Neurocomputing",
      link: "https://drive.google.com/file/d/1ZPCU1P9ytV0bSxE7OIYGGs8jSKTezaDb/view?usp=sharing",
      areas: "Artificial Intelligence, Computer Science Applications, Cognitive Neuroscience",
      metrics: "Q1 (SJR); Q2 (JCR); IF=6; SC=10.8; H-index=196 (2023)",
      date: "Since 2024",
      publisher: "Elsevier",
    },
    {
      id: 6,
      title: "Engineering Applications of Artificial Intelligence",
      link: "https://drive.google.com/file/d/1YK7zww3SDHgIOMsZo9waPFYP5Jo8myAg/view?usp=sharing",
      areas: "Artificial Intelligence, Control and Systems Engineering, Electrical and Electronic Engineering",
      metrics: "Q1 (SJR); Q1 (JCR); IF=8; SC=12.3; H-index=137 (2023)",
      date: "Since 2024",
      publisher: "Elsevier",
    },
    {
      id: 5,
      title: "IEEE Access",
      link: "https://www.webofscience.com/wos/author/record/KLC-3681-2024",
      areas: "Computer Science Miscellaneous, Engineering Miscellaneous",
      metrics: "Q1 (SJR); Q2 (JCR); IF=3.9; SC=9; H-index=242 (2023)",
      date: "Since 2024",
      publisher: "IEEE",
    },
    {
      id: 4,
      title: "Computers and Electronics in Agriculture",
      link: "https://drive.google.com/file/d/1qyEA1TiMOpu0Bkizmzxgz_C0wKJ5piD-/view?usp=drive_link",
      areas: "Computer Science Applications, Agronomy and Crop Science, Animal Science and Zoology, Forestry, Horticulture",
      metrics: "Q1 (SJR); Q1 (JCR); IF=8.3; SC=13.6; H-index=168 (2023)",
      date: "Since 2024",
      publisher: "Elsevier",
    },
    {
      id: 3,
      title: "Image and Vision Computing",
      link: "https://drive.google.com/file/d/12yG2bB7iUbCMeyuwyhUFkgdZizSeZxwf/view?usp=drive_link",
      areas: "Computer Vision and Pattern Recognition, Signal Processing, Electrical and Electronic Engineering",
      metrics: "Q1 (SJR); Q1 (JCR); IF=4.7; SC=7.3; H-index=144 (2023)",
      date: "Since 2024",
      publisher: "Elsevier",
    },
    {
      id: 2,
      title: "Expert Systems with Applications",
      link: "https://drive.google.com/file/d/15GelT36VaYt3DssY5xkFu8GSCg19Sv19/view?usp=drive_link",
      areas: "Artificial intelligence, Computer science applications, Engineering (miscellaneous)",
      metrics: "Q1 (SJR); Q1 (JCR); IF=8.5; SC=12.6; H-index=249 (2023)",
      date: "Since 2024",
      publisher: "Elsevier",
    },
    {
      id: 1,
      title: "Information Processing & Management",
      link: "https://drive.google.com/file/d/1eFJxvMEYVPki0z5yLrVBlcOwyKPVrucO/view?usp=sharing",
      areas: "Computer science applications, Information systems, Media technology",
      metrics: "Q1 (SJR); Q1 (JCR); IF=8.6; SC=14.8; H-index=114 (2023)",
      date: "Since 2023",
      publisher: "Elsevier",
    },
  ];

  return (
    <>
      {serviceContent.map((item) => (
        <li key={item.id}>
          <div className="list_inner">
            {/*<span className="number">{item.no}</span>*/}
            <div className="tokyo_tm_button_2" data-position="left">
                <a href={item.link} download target="_blank">
                    <span>{item.title}</span>
                </a>
            </div>
            <hr />
            <div className="text"> <h5 className="titlePeer">Subject areas: </h5> {item.areas}</div>
            <div className="text"> <h5 className="titlePeer">Metrics: </h5> {item.metrics}</div>
            <div className="text"> <h5 className="titlePeer">Publisher: </h5> {item.publisher}</div>
            <hr />
            <div className="date">{item.date}</div>
            <hr />
          </div>
        </li>
      ))}
    </>
  );
};

export default PeerReview;
