import { TapiResponseSchema } from "./validations";
import { Show } from "./components/show";
import { Search } from "./components/search";
import { fetchData } from "./api";
import { Suspense } from "react";

interface IsearchParamsProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function Home({ searchParams }: IsearchParamsProps) {
  const { hsCode } = searchParams;

  let promise: TapiResponseSchema | undefined = undefined;
  if (hsCode) {
    promise = await fetchData(Number(hsCode));
    console.log(promise);
  }

  return (
    <div className="p-5">
      <label htmlFor="search" className="sr-only">
        Search hs-code
      </label>
      <Search placeholder="Search hs-code ..." />

      <section>
        <Suspense fallback={<div>Loading...</div>}>
          {promise ? <Show apiData={promise} /> : "No data found"}
        </Suspense>
      </section>
    </div>
  );
}
