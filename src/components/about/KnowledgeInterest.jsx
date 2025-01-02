import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 2,
      colClass: "left",
      title: "Artificial Intelligence",
      content: [
        " Keras ", " Tensorflow",
        " Pytorch", "Hugging Face", "Scikit-learn",
        " Pandas ", " OpenCV ", " Seaborn ", " Matplotlib ", " Numpy ",
        " High-performance computing", " Roboflow ",
        " Academic research and publications ",
      ],
    },
    {
      id: 1,
      colClass: "left",
      title: "Soft Skills",
      content: [
        " Multitasking, Work under pressure",
        " Team Work, Time management",
        " Adaptability, Organization",
        " Problem-solving, Stress management",
        " Interpersonal communication, Cross-functional team leadership",
        " Learning potential "
      ],
    },
  ];

  const stackedKnowledgeContent = [
    {
      id: 1,
      colClass: "right",
      title: "Programming Languages",
      content: [
        " Python ",
        " R "
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Operating Systems",
      content: [
        " Windows ",
        " Linux "
      ],
    },
    {
      id: 3,
      colClass: "right",
      title: "Others",
      content: [
        " LaTeX / Overleaf",
        " GitHub ",
        " Visual Studio Code ",
        " Google Colaboratory ",
        " Kaggle Notebooks "
      ],
    },
  ];
  
  return (
    <>
      <div className="right">
        {stackedKnowledgeContent.map((item) => (
          <div key={item.id}>
            <div className="tokyo_section_title">
              <h3>{item.title}</h3>
            </div>
            <div className="tokyo_tm_skill_list">
              <ul>
                {item.content.map((val, i) => (
                  <li key={i}>
                    <span>
                      <img
                        className="svg"
                        src={`${process.env.PUBLIC_URL}/assets/img/svg/rightarrow.svg`}
                        alt="arrow"
                      />
                      {val}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src={`${process.env.PUBLIC_URL}/assets/img/svg/rightarrow.svg`}
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
