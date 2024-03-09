import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="w-full h-full rounded-xl flex flex-col justify-center items-center">
      <Image
        src="/images/data-not-found.jpg"
        width={230}
        height={250}
        alt="data-not-found"
      />
    </div>
  );
};

export default NotFound;
