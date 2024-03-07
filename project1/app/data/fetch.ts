import { TapiResponseSchema } from "../validations";

const AUTH_USERNAME = process.env.AUTH_USERNAME;
const AUTH_PASSWORD = process.env.AUTH_PASSWORD;
const BASE_URL = "https://eximcode.sireto.dev/codes/lookup";

export async function getData(hsCode: string): Promise<TapiResponseSchema> {
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " + btoa(AUTH_USERNAME + ":" + AUTH_PASSWORD)
  );

  const res = await fetch(BASE_URL + `?code=${hsCode}&document=hs_code`, {
    cache: "force-cache",
    method: "GET",
    headers: headers,
  });

  return res.json();
}
