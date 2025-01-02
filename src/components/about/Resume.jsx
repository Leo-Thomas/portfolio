import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 2,
      colClass: "left",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "09/2023 - Now",
          institute: "Kauel Inc.",
          degree: "Applied Research Engineer",
          location: "Menlo Park(Silicon Valley), California, USA",
        },
        {
          id: 2,
          year: "08/2023 - Now",
          institute: "Zeus Intelligent Solutions",
          degree: "Senior Research Engineer",
          location: "Houston,Texas,USA",
        },
        {
          id: 3,
          year: "05/2023 - Now",
          institute: "SleepCare Clinics",
          degree: "Researcher",
          location: "Leicester, United Kingdom"
        },
        {
          id: 4,
          year: "03/2023 - 08/2023",
          institute: "Kauel Inc.",
          degree: "Trainee Engineer",
          location: "Menlo Park(Silicon Valley), California, USA"
        },
        {
          id: 5,
          year: "01/2023 - 03/2023",
          institute: "Yachay Tech University",
          degree: "Research Assistant",
          location: "Urcuquí, Ecuador",
        },
        {
          id: 6,
          year: "02/2022 - 09/2022",
          institute: "TALOV",
          degree: "Computer Vision Internship",
          location: "Newark,Delaware,USA"
        },
        {
          id: 7,
          year: "11/2021 - 02/2022",
          institute: "Yachay Tech University",
          degree: "Teaching Assistant",
          location: "Urcuquí, Ecuador",
        },
      ],
    },
    {
      id: 1,
      colClass: "right",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2023 - Now",
          institute: "Universitat Autònoma de Barcelona",
          degree: "Ph.D. in Computer Science",
          location: "Barcelona, Spain",
        },
        {
          id: 2,
          year: "2018 - 2023",
          institute: "Yachay Tech University",
          degree: "Information Technology Engineering",
          location: "Urcuquí, Ecuador",
        },
        {
          id: 3,
          year: "2013 - 2018",
          institute: "Unidad Educativa Adventista",
          degree: "High School degree",
          location: "Ambato, Ecuador",
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h2>{value.degree}</h2>
                      <hr></hr>
                      <h3>{value.institute}</h3>
                      <span>{value.location}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
