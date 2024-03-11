import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  errorMessage: string;
  img_url: StaticImageData;
};

export const Error = ({ img_url, errorMessage }: Props) => {
  return (
    <div className="w-full -mt-7 bg-white flex flex-col justify-start items-center max-w-sm rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="w-full flex justify-center items-center">
        <Image src={img_url} width={300} height={300} alt={errorMessage} />
      </div>
      <h2 className="mt-2 pb-2 scroll-m-20 border-b text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        {errorMessage}
      </h2>
    </div>
  );
};
