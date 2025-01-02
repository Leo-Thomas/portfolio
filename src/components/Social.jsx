import React from "react";

const SocialShare = [
  
  {
    iconName: "linkedin",
    link: "https://linkedin.com/in/leo-thomas-ramos",
  },
  {
    iconName: "researchgate",
    link: "https://www.researchgate.net/profile/Leo-Ramos-4",
  },
  { iconName: "googlescholar", 
    link: "https://scholar.google.co.uk/citations?hl=en&user=p_09NsgAAAAJ" },
  {
    iconName: "instagram-2",
    link: "https://www.instagram.com/leo.tho.mas/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`${process.env.PUBLIC_URL}/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
