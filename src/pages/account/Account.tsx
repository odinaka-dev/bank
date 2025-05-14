"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { BiLogoDigitalocean } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import FintechImagge from "@/assets/img/fintech.avif";
import SelectComponents from "@/components/SelectComponents";
import EmploymentComponents from "@/components/EmploymentComponents";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const CreateAccount = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInformation onNext={nextStep} />;
      case 2:
        return <Credentials onNext={nextStep} />;
      case 3:
        return <IdentityVerification onNext={nextStep} />;
      case 4:
        return <OtherInformation onNext={nextStep} />;
      case 5:
        return <EmploymentDetails onNext={nextStep} />;
      case 6:
        return <Verification />;
      default:
        return null;
    }
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="text-blue-950 flex gap-2 items-center text-xl">
              <BiLogoDigitalocean />
              <h1>Unionly</h1>
            </div>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{renderStep()}</div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={FintechImagge}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.5] dark:grayscale"
        />
      </div>
    </div>
  );
};

// STEP 1
const PersonalInformation = ({ onNext }: { onNext: () => void }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onNext();
    }}
  >
    <div className="grid gap-6 text-sm mb-6">
      <h1 className="text-xl text-blue-950">Personal Information</h1>
      <div>
        <Label>Name</Label>
        <Input type="text" placeholder="Full name" className="w-full" />
      </div>
      <div>
        <Label>Phone Number</Label>
        <Input type="number" className="w-full" placeholder="(+xxx)-" />
      </div>
    </div>
    <div className="grid gap-6 text-sm mb-6">
      <div>
        <Label>Gender</Label>
        <SelectComponents />
      </div>
      <div>
        <Label>Date of Birth</Label>
        <Input type="date" className="w-full" />
      </div>
    </div>
    <div className="grid gap-6 text-sm mb-6">
      <div>
        <Label>Nationality</Label>
        <Input type="text" className="w-full" />
      </div>
      <div>
        <Label>Country of Residence</Label>
        <Input type="text" className="w-full" />
      </div>
    </div>
    <Button type="submit" className="w-full bg-blue-950">
      Next
    </Button>
  </form>
);

// STEP 2
const Credentials = ({ onNext }: { onNext: () => void }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onNext();
    }}
    className="text-sm"
  >
    <h1 className="text-xl text-blue-950 mb-4">Credentials Information</h1>
    <div className="mb-6">
      <Label>Active email Address</Label>
      <Input type="email" placeholder="example@domain.com" className="w-full" />
    </div>
    <div className="mb-6">
      <Label>Resedential Address</Label>
      <Input type="text" placeholder="Residence" className="w-full" />
    </div>
    <div className="mb-6">
      <Label>State / Province</Label>
      <Input type="text" placeholder="state" className="w-full" />
    </div>
    <div className="mb-6">
      <Label>Country</Label>
      <Input type="text" placeholder="Residence" className="w-full" />
    </div>
    <Button type="submit" className="w-full bg-blue-950">
      Next
    </Button>
  </form>
);

// STEP 3
const IdentityVerification = ({ onNext }: { onNext: () => void }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onNext();
    }}
    className="text-sm"
  >
    <h1 className="text-xl text-blue-950 mb-4">Identity Verification</h1>
    <div className="mb-6">
      <Label>ID Type</Label>
      <SelectComponents />
    </div>
    <div className="mb-6">
      <Label>ID Number</Label>
      <Input
        type="text"
        className="w-full"
        placeholder="National Identiy Number"
      />
    </div>
    <div className="mb-6">
      <Label>ID Issue Date & Expiry Date</Label>
      <Input type="text" className="w-full" placeholder="ID Date" />
    </div>
    <div className="mb-6">
      <Label>Upload Photo of ID document</Label>
      <Input type="file" className="w-full" placeholder="ID Date" />
    </div>
    <Button type="submit" className="w-full bg-blue-950">
      Next
    </Button>
  </form>
);

// STEP 4
const OtherInformation = ({ onNext }: { onNext: () => void }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onNext();
    }}
    className="text-sm"
  >
    <h1 className="text-xl text-blue-950 mb-4">Employment Information</h1>
    <div className="mb-6">
      <Label>Employment Type</Label>
      <EmploymentComponents />
    </div>
    <div className="mb-6">
      <Label>Source of Income</Label>
      <Input type="text" className="w-full" />
    </div>
    <div className="mb-6">
      <Label>Monthly Income</Label>
      <Input type="number" className="w-full" />
    </div>
    <Button type="submit" className="w-full bg-blue-950">
      Next
    </Button>
  </form>
);

// STEP 5
const EmploymentDetails = ({ onNext }: { onNext: () => void }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      onNext();
    }}
    className="text-sm"
  >
    <h1 className="text-xl text-blue-950 mb-4">Banking Details</h1>
    <div className="mb-6">
      <Label>Existing Bank Name</Label>
      <Input type="text" className="w-full" />
    </div>
    <div className="mb-6">
      <Label>Accout Type</Label>
      <Input type="text" className="w-full" placeholder="savings/ current" />
    </div>
    <Button type="submit" className="w-full bg-blue-950">
      Next
    </Button>
  </form>
);

// FINAL STEP (STEP 6)
const Verification = () => (
  <div className="text-center space-y-4">
    <div className="text-green-600 text-8xl py-6 mb-2 flex justify-center">
      <RiVerifiedBadgeFill />
    </div>
    <h2 className="text-xl font-semibold">All steps completed</h2>
    <p className="text-sm text-gray-600">successfully created your Account</p>
    <Link href="/dashboard">
      <Button className="bg-blue-950 w-full">Go to Dashboard</Button>
    </Link>
  </div>
);

export default CreateAccount;
