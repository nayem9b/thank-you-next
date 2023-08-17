import React from "react";
import Image from "next/image";
const Album = () => {
  return (
    <div>
      <h1>Image with img tag</h1>
      <img
        src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"
        alt=""
      />
      <h1>Image with Image component</h1>
      <Image
        src="https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"
        width={500}
        height={500}
        alt=""
      ></Image>
    </div>
  );
};

export default Album;
