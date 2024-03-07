import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="w-screen h-[85vh] flex justify-center items-center">
      <Image
        src="/images/data-not-found.jpg"
        width={500}
        height={500}
        alt="data-not-found"
      />
    </div>
  );
};

export default NotFound;
