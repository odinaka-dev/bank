import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold text-blue-950">Create New Account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="text">First Name</Label>
          <Input id="text" type="name" placeholder="John Doe" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Last Name</Label>
          <Input id="text" type="name" placeholder="John Doe" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Preferred UserName</Label>
          <Input id="text" type="name" placeholder="John Doe" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required />
          <div className="flex items-center">
            <Label htmlFor="password">Confirm Password</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Nationality</Label>
          <Input id="text" type="name" placeholder="United states" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Phone Number</Label>
          <Input id="text" type="name" placeholder="+(---)" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Accout Type</Label>
          <Input
            id="text"
            type="name"
            placeholder="savings or Current"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Employment status</Label>
          <Input id="text" type="name" placeholder="Employed or not" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Gross Monthly Income</Label>
          <Input id="text" type="name" placeholder="$1000000" required />
        </div>
        <Button type="submit" className="w-full bg-blue-950">
          Create user account
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        {/* <Button variant="outline" className="w-full">
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
                fill="#4285F4"
              ></path>{" "}
              <path
                d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z"
                fill="#34A853"
              ></path>{" "}
              <path
                d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z"
                fill="#FBBC05"
              ></path>{" "}
              <path
                d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z"
                fill="#EB4335"
              ></path>{" "}
            </g>
          </svg>
          create user account with Google
        </Button> */}
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
