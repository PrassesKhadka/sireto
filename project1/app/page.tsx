"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { TmySchema } from "./validations";
import { Show } from "./components/show";

export type Tdata = TmySchema | "checking";

export default function Home() {
  const [hsCode, setHsCode] = useState<string>();
  const [data, setData] = useState<Tdata>();

  const baseUrl = "https://eximcode.sireto.dev/codes/lookup";

  const handleFetch = () => {
    setData("checking");
    let headers = new Headers();
    headers.set("Authorization", "Basic " + btoa(username + ":" + password));
    const res = fetch(baseUrl + `?code=${hsCode}&document=hs_code`, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        setData((prev) => (prev = json));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="p-5">
      <form onSubmit={handleFetch}>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <Input
          type="text"
          placeholder="Search hs-code..."
          onChange={(e) => setHsCode((prev) => (prev = e.target.value.trim()))}
        />
        <Button>Submit</Button>
      </form>

      <section>
        {data && hsCode ? <Show apiData={data} /> : "No data found"}
      </section>
    </div>
  );
}
