import { TapiResponseSchema } from "./validations";
import { Search } from "./components/search";
import { getData } from "./data/fetch";
import { Suspense } from "react";
import { Card } from "./components/card";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import NotFound from "./components/not-found";

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
    <div className="p-5 flex flex-col justify-center items-center ">
      <div className="mb-4 w-[50%]">
        <label htmlFor="search" className="sr-only">
          Search hs-code
        </label>
        <Search placeholder="Search hs-code ..." />
      </div>

      <section>
        {hsCode ? (
          <Suspense fallback={<div>Loading...</div>}>
            <Card apiData={data} />
          </Suspense>
        ) : null}
      </section>
    </div>
  );
}
