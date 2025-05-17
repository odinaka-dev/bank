"use client";

import React from "react";
import { DataTable } from "@/components/data-table";

import data from "./data.json";

export default function transaction() {
  return (
    <div>
      <h1 className="font-bold text-2xl py-6 capitalize">All transactions</h1>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
