import { TapiResponseSchema } from "./validations";
import { Search } from "./components/search";
import { getData } from "./data/fetch";
import { Suspense } from "react";
import { Card } from "./components/card";

interface IsearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function Home({ searchParams }: IsearchParamsProps) {
  const { hsCode } = searchParams;

  let data: TapiResponseSchema | null = null;

  if (hsCode) {
    data = await getData(hsCode);
  }

  return (
    <div className="w-[400px] h-[400px] p-5 flex flex-col gap-8 justify-center items-center ">
      <div className="w-[90%]">
        <label htmlFor="search" className="sr-only">
          Search hs-code
        </label>
        <Search placeholder="Search hs-code ..." />
      </div>

      <section className="h-[265px] w-[300px] mx-2">
        {hsCode ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Card apiData={data} />
          </Suspense>
        ) : null}
      </section>
    </div>
  );
}
