import React, { useState, useEffect } from "react";
import "./Tag.css"; // Import your CSS file

const Tag = () => {
  const arr = ["Crafting Delicious Moments", "One Slice at a Time"];
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    // Set the display text to "One Slice at a Time" after a delay
    const timer = setTimeout(() => {
      setFlag(!flag);
    }, 8000); // Change text after 2 seconds (adjust the delay as needed)

    // Clear the timer when the component unmounts or the text changes
    return () => clearTimeout(timer);
  }, [flag]);

  return (
    <div className="wrapper">
      <svg>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
          {flag ? arr[0] : arr[1]}
        </text>
      </svg>
    </div>
  );
};

export default Tag;
