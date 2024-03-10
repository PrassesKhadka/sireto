"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { Input } from "@/components/ui/input";
import { hsCodeInputSchema } from "../validations";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface IsearchProps {
  placeholder: string;
}

export const Search = ({ placeholder }: IsearchProps) => {
  const [inputString, setInputString] = useState<string>("");
  const [invalidInputMessage, setInvalidInputMessage] = useState<string>("");
  // debouncing the input string and validation will occur for this
  const [hsCode] = useDebounce(inputString, 500);

  const router = useRouter();

  useEffect(() => {
    setInvalidInputMessage("");
    // when empty input
    if (!hsCode) {
      router.push(`/`);
      return;
    }
    // validating the input string using zod
    const validHsCode = hsCodeInputSchema.safeParse(hsCode);
    // if invalid input
    if (!validHsCode.success) {
      setInvalidInputMessage(validHsCode.error.errors[0].message);
      router.push(`/`);
      return;
    }
    // if valid input
    router.push(`?hsCode=${hsCode}`);
  }, [hsCode, router]);

  return (
    <div className="p-1 h-[80px]">
      <div className="flex justify-center items-center relative ">
        <Input
          placeholder={placeholder}
          onChange={(e) => setInputString(e.target.value.trim())}
          className="rounded-[30px]"
        />
        <button className="absolute right-0 pr-2">
          <MagnifyingGlassIcon className="h-5 w-6" />
        </button>
      </div>
      <span
        id="invalidInputErrorMessage"
        className="flex items-center font-medium tracking-wide text-red-500 text-sm mt-1 ml-1"
      >
        {invalidInputMessage}
      </span>
    </div>
  );
};
