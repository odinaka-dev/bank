"use client";

import { useState } from "react";
import axios from "axios";
import Account from "@/pages/account/Account";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Modal from "../pages/modal";
import { useRouter } from "next/navigation";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  // state for modal change
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();

  // states for all the all the data to post
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Nationality, setNationality] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accountType, setAccountType] = useState("");
  const [Id, setId] = useState("");
  const [EmploymentStatus, setEmploymentStatus] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");

  // const register request
  const CreateUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // return a modal for accout has been completed then a redirect to the user dashboard.

    const items = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      Nationality: Nationality,
      phone: phoneNumber,
      email: email,
      password: password,
      AccountType: accountType,
      IdNumber: Id,
      EmploymentStatus: EmploymentStatus,
      monthlyIncome: monthlyIncome,
    };

    // axios post request
    try {
      const request = await axios.post(
        `https://unionly-server.onrender.com/api/auth/register`,
        items,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (request.status === 200 || request.status === 201) {
        console.log("post successfully", request.data);
        alert("account created successfully");
        router.push("/login");
      }
    } catch (error) {
      console.error("error");
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={CreateUser}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-blue-950">Create New Account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          create your account by Inputting your details.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="text">First Name</Label>
          <Input
            id="text"
            type="text"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Last Name</Label>
          <Input
            id="text"
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Preferred UserName</Label>
          <Input
            id="text"
            type="text"
            placeholder="JonnyDoe112"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex items-center">
            <Label htmlFor="password">Confirm Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="confirm password"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Nationality</Label>
          <Input
            id="text"
            type="name"
            placeholder="United states"
            value={Nationality}
            onChange={(e) => setNationality(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Phone Number</Label>
          <Input
            id="text"
            type="name"
            placeholder="+(---)"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Account Type</Label>
          <Input
            id="text"
            type="name"
            placeholder="savings or Current"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Employment status</Label>
          <Input
            id="text"
            type="name"
            placeholder="Employed or not"
            value={EmploymentStatus}
            onChange={(e) => setEmploymentStatus(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Gross Monthly Income</Label>
          <Input
            id="text"
            type="name"
            placeholder="$1000000"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full bg-blue-950">
          Create user account
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
      </div>
      <div className="text-center text-sm">
        Have an existing account?{" "}
        <a href="/login" className="underline underline-offset-4">
          Login
        </a>
      </div>
    </form>
  );
}
