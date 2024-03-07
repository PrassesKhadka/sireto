"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { Input } from "@/components/ui/input";
import { TvalidInputSchema } from "../validations";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface IsearchProps {
  placeholder: string;
}

export const Search = ({ placeholder }: IsearchProps) => {
  const [inputString, setInputString] = useState<string>("");

  const [hsCode] = useDebounce(inputString, 500);
  const router = useRouter();

  useEffect(() => {
    if (!hsCode) {
      router.push(`/`);
      return;
    }
    router.push(`?hsCode=${hsCode}`);
  }, [hsCode, router]);

  return (
    <div className="flex justify-center items-center relative">
      <Input
        placeholder={placeholder}
        onChange={(e) => setInputString(e.target.value.trim())}
        className="rounded-[30px]"
      />
      <button className="absolute right-0 pr-2">
        <MagnifyingGlassIcon className="h-5 w-6" />
      </button>
    </div>
  );
};
