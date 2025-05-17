"use client";

import React from "react";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import NewUserForm from "@/components/newUserForm";

export default function addNewUser() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl py-6 capitalize">Manage Customers</h1>
        <div className="">
          <Button className="hidden sm:flex">Add new customer</Button>
        </div>
      </div>
      <div className="form">
        <NewUserForm />
      </div>
    </div>
  );
}
