import { TapiResponseSchema, apiResponseSchema } from "../validations";
import Image from "next/image";

interface IcardProps {
  apiData: TapiResponseSchema;
}

export function Card({ apiData }: IcardProps) {
  // Validating the api response -> if the api response is invalid
  if (!apiResponseSchema.safeParse(apiData).success)
    return (
      <div className="justify-center items-center bg-zinc-100 block max-w-sm p-6 rounded-xl shadow hover:bg-zinc-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex justify-center items-center">
          <Image
            src="/images/data-not-found.jpg"
            width={250}
            height={250}
            alt="data-not-found"
          />
        </div>
      </div>
    );

  // if the api response is valid then show the necessary data on the screen
  return (
    <div className="w-full h-full bg-zinc-100 block max-w-sm p-6 rounded-xl shadow hover:bg-zinc-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Code : {apiData.code}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Description: {apiData.description}
      </p>
      <div className="mt-3">
        <h2 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          List:
        </h2>
        <ul className="max-w-md space-y-1 text-gray-800 list-disc list-inside dark:text-gray-400">
          {apiData.parents.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
