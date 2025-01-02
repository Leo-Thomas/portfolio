import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Birthday",
          content: "06/07/1998",
        },
        {
          id: 3,
          name: "Current address",
          content: "Barcelona, Spain",
        },
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 3,
          name: "Email",
          content: (
            <>
              <a href="mailto:theleothomasramos@gmail.com">theleothomasramos@gmail.com</a>
            </>
          ),
        },
        {
          id: 4,
          name: "Phone",
          content: (
            <>
              <a href="tel:+34 647 79 79 64">+34 647 79 79 64</a>
            </>
          ),
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
