// Server component
import { TapiResponseSchema, TvalidInputSchema } from "../validations";

const AUTH_USERNAME = process.env.AUTH_USERNAME;
const AUTH_PASSWORD = process.env.AUTH_PASSWORD;
const baseUrl = "https://eximcode.sireto.dev/codes/lookup";

export const fetchData = async (
  hsCode: number
): Promise<TapiResponseSchema> => {
  let headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " + btoa(AUTH_USERNAME + ":" + AUTH_PASSWORD)
  );
  const data: Promise<TapiResponseSchema> = fetch(
    baseUrl + `?code=${hsCode}&document=hs_code`,
    {
      method: "GET",
      headers: headers,
    }
  )
    .then((response) => response.json())
    .then((json) => json);

  return data;
};
