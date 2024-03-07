import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="w-full h-full rounded-xl flex justify-center items-center">
      <Image
        src="/images/data-not-found.jpg"
        width={300}
        height={300}
        alt="data-not-found"
      />
    </div>
  );
};

export default NotFound;
