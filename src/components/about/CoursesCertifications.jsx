import React from "react";

const CoursesCertifications = () => {
  const resumeContent = [
    {
      id: 41,
      colClass: "left",
      resume: [
        {
          id: 21,
          year: "2024",
          description: "Simplilearn",
          title: "Artificial Intelligence Machine Learning and Deep Learning",
          link: "https://drive.google.com/file/d/1Rku_HDkuLSnlP_jqPUg9tFr6QisJ03A4/view?usp=sharing",
        },
        {
          id: 20,
          year: "2024",
          description: "Simplilearn",
          title: "Python for Data Science",
          link: "https://drive.google.com/file/d/1Ky1nctjfQsNA4SRpa1iBwfebl2yLMUrU/view?usp=sharing",
        },
        {
          id: 19,
          year: "2024",
          description: "Simplilearn",
          title: "Deep Learning with Keras and TensorFlow",
          link: "https://drive.google.com/file/d/1-41VDgYJYhFTIVn2uHP3ZjWfVwqGDfps/view?usp=sharing",
        },
        {
          id: 18,
          year: "2023",
          description: "[8h] - NVIDIA Deep Learning Institute",
          title: "Fundamentals of Deep Learning",
          link: "https://courses.nvidia.com/certificates/bc6d16b8626b4633bebc4dcd4e2a6d4f/",
        },
        {
          id: 2,
          year: "2023",
          description: "[17h] - Platzi",
          title: "Deep Learning con PyTorch",
          link: "https://drive.google.com/file/d/14B3b-PYz7d7Nu_cbzDvuHIssB99VM_-1/view?usp=drive_link",
        },
        {
          id: 3,
          year: "2022",
          description: "[13h] - Platzi",
          title: "Transfer Learning con Hugging Face",
          link: "https://drive.google.com/file/d/1G6uWfm0hYDGzOMMRaIUh5tH2DXnnGIAf/view?usp=drive_link",
        },
        {
          id: 4,
          year: "2022",
          description: "[16h] - Platzi",
          title: "Redes Neuronales profesionales con TensorFlow",
          link: "https://drive.google.com/file/d/1zF2iXtmOrRlSJJyuS39p7ysFggELF7X9/view?usp=drive_link",
        },
        {
          id: 5,
          year: "2022",
          description: "[20h] - Platzi",
          title: "Redes Neuronales Convolucionales con Python y Keras",
          link: "https://drive.google.com/file/d/1Ov-vPPA2_EvXeU_YXl_ySxHit5EUWlBM/view?usp=drive_link",
        },
        {
          id: 6,
          year: "2022",
          description: "[16h] - Platzi",
          title: "Fundamentos de Redes Neuronales con Python y Keras",
          link: "https://drive.google.com/file/d/14AtvziSuzg6dSSQMgoql-Tr4xBX7uzjc/view?usp=drive_link",
        },
        {
          id: 7,
          year: "2022",
          description: "[33h] - IBM through Coursera",
          title: "Specialization in AI Foundations for Everyone",
          link: "https://drive.google.com/file/d/17SSxCep26vR1mVTAH2KiUrkdkAfuoVPZ/view?usp=drive_link",
        },
        {
          id: 8,
          year: "2022",
          description: "[60h] - Tecnológico de Monterrey through edX",
          title: "Professional Certificate in Data Science",
          link: "https://drive.google.com/file/d/1btDlYhGhV4ZCJkjsLK5eyaJiH0hoAl68/view?usp=drive_link",
        },
        {
          id: 9,
          year: "2022",
          description: "[22h] - IBM through Coursera",
          title: "Python for Data Science, AI & Development",
          link: "https://drive.google.com/file/d/13koxb_AjRyJKZUopAw0HsDylygJyoRBH/view?usp=drive_link",
        },
        {
          id: 10,
          year: "2022",
          description: "[22h] - IBM through Coursera",
          title: "Machine Learning with Python",
          link: "https://drive.google.com/file/d/1LbCOoLBrw4RgpYYbtgGKJveRLQoEEDwP/view?usp=drive_link",
        },
        {
          id: 11,
          year: "2022",
          description: "[29h] - DeepLearning.AI through Coursera",
          title: "Neural Networks and Deep Learning",
          link: "https://drive.google.com/file/d/1JR5wK0Hb7kT7e3T1emTVSF7pyHlUCO3G/view?usp=drive_link",
        },
        {
          id: 12,
          year: "2022",
          description: "[59h] - Data Mining Consulting Perú",
          title: "Specialization in Machine Learning and Deep Learning with Python",
          link: "https://drive.google.com/file/d/1BranrEczKWxjT_q38kMPXVIuAAR6DfgB/view?usp=drive_link",
        },
        {
          id: 13,
          year: "2022",
          description: "[14h] - Data Mining Consulting Perú",
          title: "Python for Analytics",
          link: "https://drive.google.com/file/d/1A432KQY5Go0BO1nSdH5rw2F-iiBsoqbA/view?usp=drive_link",
        },
        {
          id: 14,
          year: "2022",
          description: "[22h] - Data Mining Consulting Perú",
          title: "Statistics for Data Science",
          link: "https://drive.google.com/file/d/1U3AmmBPVlsciSTp1HOcD7W361D5Hu4mv/view?usp=drive_link",
        },
        {
          id: 17,
          year: "2022",
          description: "[49h] - Universidad Autónoma de Madrid through edX",
          title: "Professional Certificate in Desarrollo y gestión de proyectos de informáticos",
          link: "https://drive.google.com/file/d/1lLD8FyDtkok-BYQ3HF2E7fN9xQdTjmoa/view?usp=drive_link",
        },
        {
          id: 16,
          year: "2022",
          description: "[17h] - Pontificia Universidad Católica de Chile through Coursera",
          title: "Introducción a la programación en Python",
          link: "https://drive.google.com/file/d/1vT4uQ52o1Rx2UCJTI0uMHzFpSOSImEPZ/view?usp=drive_link",
        },       
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
          <ul>
            <hr />
            {item?.resume?.map((value) => (
              <li key={value.id}>
                <div className="list_inner" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <div className="date_and_description" style={{ width: '60%' }}>
                    <div className="date">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <span>{value.description}</span>
                    </div>
                  </div>
                  <div className="button" style={{ width: '40%' }}>
                    <div className="tokyo_tm_button_2" data-position="left">
                      <a href={value.link} download>
                        <span>{value.title}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr />
              </li>
            ))}
          </ul>
      ))}
    </>
  );
};

export default CoursesCertifications;
