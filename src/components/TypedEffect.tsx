import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypeEffect: React.FC = () => {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedElement.current) {
      const options = {
        strings: [
          "Fullstack Web Developer",
          "AI and ML Explorer",
          "Project Manager",
          "Prompt Engineer",
        ],
        typeSpeed: 30,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
      };

      const typed = new Typed(typedElement.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div>
      <h1>
        <span ref={typedElement}></span>
      </h1>
    </div>
  );
};

export default TypeEffect;
