import { TapiResponseSchema } from "../validations";
import NotFound from "./not-found";

interface IcardProps {
  apiData: TapiResponseSchema | null | undefined;
}

export function Card({ apiData }: IcardProps) {
  return (
    <div>
      {apiData ? (
        <div className="w-full h-full bg-zinc-100 block max-w-sm p-6 rounded-xl shadow hover:bg-zinc-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {apiData.code}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {apiData.description}
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
      ) : (
        <NotFound />
      )}
    </div>
  );
}
