import { ThsCodeInputSchema, apiResponseSchema } from "./validations";
import { Search } from "./components/Search";
import { getData } from "./data/fetch";
import { Error } from "./components/Error";
import { Card } from "./components/Card";
import DataNotFoundImage from "@/public/images/data-not-found.jpg";

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

      <section id="section" className="w-full mx-2">
        {!hsCode ? null : apiResponseSchema.safeParse(data).success ? (
          <Card apiData={data} />
        ) : (
          <Error img_url={DataNotFoundImage} errorMessage="Data Not Found" />
        )}
      </section>
    </div>
  );
}
