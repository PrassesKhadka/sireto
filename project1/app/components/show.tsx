"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tdata } from "../page";

interface IshowProps {
  apiData: Tdata;
}

export function Show({ apiData }: IshowProps) {
  return (
    <div>
      {apiData === "checking" ? (
        "Loading..."
      ) : (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {apiData.code} : {apiData.description}
            </AccordionTrigger>
            <AccordionContent>
              {apiData.parents.map((value: string) => (
                <p>{value}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}
