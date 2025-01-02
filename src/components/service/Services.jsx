import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
    e.preventDefault();
  }

  const serviceContent = [
    {
      id: 1,
      no: "01",
      title: "Multi-Spectral Image Analysis and Understanding Research Group",
      position: "PhD Researcher",
      location: "Universitat Autònoma de Barcelona - Barcelona, Spain",
      date: "11 / 2023 - Now",
      text: `Research areas: Computer Vision, Image Processing, Machine Learning, Deep Learning, Multi-Spectral
      Imaging, Remote Sensing. Director: Felipe Lumbreras, PhD.`,
    },
    {
      id: 2,
      no: "02",
      title: "Numerical Analysis and Data Science Research Group",
      position: "Undergraduate Researcher",
      location: "Yachay Tech University - Urcuquí, Ecuador",
      date: "11 / 2022 - 06 / 2023",
      text: `Research areas: Data Science, Machine Learning, Statistical Analysis, Multivariate Analysis. Director: Raúl
      Manzanilla, PhD.`,
    },
    {
      id: 3,
      no: "03",
      title: " Deep Learning for Autonomous Driving, Robotics, and Computer Vision Research Group (DeepARC)",
      position: "Undergraduate Researcher",
      location: "Yachay Tech University - Urcuquí, Ecuador",
      date: "02 / 2022 - 06 / 2023",
      text: `Research areas: Deep Learning, Computer Vision, Natural Language Processing. Director: Eugenio Moro-
      cho, PhD.`,
    },
    {
      id: 4,
      no: "04",
      title: "Scientific Computing Group",
      position: "Undergraduate Researcher",
      location: "Yachay Tech University - Urcuquí, Ecuador",
      date: "04 / 2022 - 07 / 2022",
      text: `Research areas: Machine Learning, Image Processing, Data Science. Director: Israel Pineda, PhD.`,
    },
  ];

  return (
    <>
      {serviceContent.map((item) => (
        <li key={item.id}>
          <div className="list_inner">
            <span className="number">{item.no}</span>
            <h3 className="title">{item.title}</h3>
            <div className="position">{item.position}</div>
            <hr />
            <div className="location">{item.location}</div>
            <div className="date">{item.date}</div>
            <hr />
            <p className="text">{item.text}</p>
            <div className="tokyo_tm_read_more">
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default Services;
