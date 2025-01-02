import React from "react";

const CopyRight = () => {
  return (
    <div className="copyright">
      <p>
        &copy; {new Date().getFullYear()} Leo Thomas <br /> Created by
        <a
          href="https://www.linkedin.com/in/jean-camacho-126126212/"
          target="_blank"
          rel="noreferrer"
        >
          Jean Camacho - Fullstack Developer
        </a>
      </p>
    </div>
  );
};

export default CopyRight;
