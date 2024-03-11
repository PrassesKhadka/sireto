import { TapiResponseSchema, apiResponseSchema } from "../validations";
import Image from "next/image";

interface IcardProps {
  apiData: TapiResponseSchema;
}

export function Card({ apiData }: IcardProps) {
  // if the api response is valid then show the necessary data on the screen
  return (
    <div className="w-full flex justify-center rounded-lg ">
      <div className="block max-w-[18rem] rounded-lg shadow-lg bg-green-300 text-black shadow-secondary-1">
        <div className="border-b-2 border-black/20 px-6 py-3">
          Code: {apiData.code}
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">
            Description: {apiData.description}
          </h5>
          <p className="text-base">
            parents:{" "}
            {apiData.parents.map((value, index) =>
              apiData.parents.length > 1 && index != apiData.parents.length - 1
                ? `${value} and `
                : value
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
