import React from "react";

const Hobbies = () => {
  const partnerImg = [
    {
      resume: [
        {
          id: "1",
          img: "workout.svg",
          description: "Workout",
        },
        {
          id: "2",
          img: "running.svg",
          description: "Running",
        },
        {
          id: "3",
          img: "reading.svg",
          description: "Reading",
        },
        {
          id: "4",
          img: "music.svg",
          description: "Music appreciation",
        },
        {
          id: "5",
          img: "language.svg",
          description: "Language learning",
        },
        {
          id: "6",
          img: "photo.svg",
          description: "Photography",
        },
      ],
    },
  ];
  return (
    <>
      {partnerImg.map((item) => (
        <ul style={{alignItems: 'center'}}>
        {item?.resume?.map((value) =>(
          <li key={value.id} style={{ display: 'inline-block'}}>
            <div className="list_inner">
              <img className="svg" src={`${process.env.PUBLIC_URL}/assets/img/svg/${value.img}`} alt={value.img} />
              <p>{value.description}</p>
            </div>
          </li>
        ))}
        </ul>
      ))}
    </>
  );
};

export default Hobbies;
