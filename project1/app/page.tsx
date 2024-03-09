import { ThsCodeInputSchema } from "./validations";
import { Search } from "./components/Search";
import { getData } from "./data/fetch";
import { Suspense } from "react";
import { Card } from "./components/Card";

interface IsearchParamsProps {
  searchParams: { hsCode: ThsCodeInputSchema };
}

export default async function Home({
  searchParams: { hsCode },
}: IsearchParamsProps) {
  // Wait for the data to fetch
  const data = await getData(hsCode);

  return (
    <div className="w-[300px] md:w-[400px] h-[400px] flex flex-col p-5 gap-3 items-center ">
      <div className="w-full ">
        <label htmlFor="search" className="sr-only">
          Search hs-code
        </label>
        <Search placeholder="Search hs-code ..." />
      </div>

      <section className="w-full mx-2">
        {hsCode ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Card apiData={data} />
          </Suspense>
        ) : null}
      </section>
    </div>
  );
}

function Loading() {
  return <h2>Loading...</h2>;
}
