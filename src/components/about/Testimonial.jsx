import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  var settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      id: 1,
      text: `Recognized as the "BestGraduate" of the Class of 2018 for outstanding 
      academic performance.`,
      avatar: "url(assets/img/testimonials/3.jpg)",
      name: "Best Graduated",
      designation: "at Unidad Educativa Adventista",
    },
    {
      id: 2,
      text: `Recipient of the prestigious Academic Excellence Scholarship for seven 
      consecutive times, from 2019 to 2023`,
      avatar: "url(assets/img/testimonials/3.jpg)",
      name: "Academic Excellence Scholarship",
      designation: "at Yachay TechUniversity",
    },
    {
      id: 3,
      text: `Recognized with the academic honor of Magna Cum Laude for exceptional 
      performance throughout the Engineering program in Information Technology`,
      avatar: "url(assets/img/testimonials/3.jpg)",
      name: "Magna CumLaude",
      designation: "at Yachay TechUniversity",
    },
    {
      id: 4,
      text: `Awarded a postgraduate scholarship by Kauel Inc. based on prior 
      experience as a Trainee Engineer, in recognition of exceptional contributions and 
      potential within the company.`,
      avatar: "url(assets/img/testimonials/3.jpg)",
      name: "Postgraduate Scholarship",
      designation: "at Kauel Inc.",
    },
  ];

  return (
    <ul className="testimonila-slider-wrapper">
      <Slider {...settings} arrows={true}>
        {testimonialContent.map((item) => (
          <li key={item.id}>
            <div className="list_inner">
              <div className="text">
                <p>{item.text}</p>
              </div>
              <div className="details">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: item.avatar,
                    }}
                  />
                </div>
                <div className="info">
                  <h3>{item.name}</h3>
                  <span>{item.designation}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  );
};

export default Testimonial;
