"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import { Input } from "@/components/ui/input";
import { TvalidInputSchema } from "../validations";

interface IsearchProps {
  placeholder: string;
}

export const Search = ({ placeholder }: IsearchProps) => {
  const [inputString, setInputString] = useState<string>();
  const [hsCode] = useDebounce(inputString, 500);
  const router = useRouter();

  useEffect(() => {
    if (!hsCode) {
      router.push(`/`);
      return;
    }
    router.push(`?hsCode="${hsCode}"`);
  }, [hsCode, router]);

  return (
    <Input
      placeholder={placeholder}
      onChange={(e) => setInputString(e.target.value)}
    />
  );
};
