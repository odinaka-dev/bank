// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { DollarSign, CreditCard, Users, Activity, Download, ArrowRightLeft, User, Lightbulb } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// export default function DashboardPage() {
//   const user = {
//     name: "Jane Doe",
//     email: "jane.doe@example.com",
//     accountNumber: "9876-5432-1098-7654",
//     balance: 25730.55,
//   };

//   const quickStats = [
//     { title: "Total Income", value: "$15,231.89", change: "+20.1% from last month", icon: <DollarSign className="h-5 w-5 text-muted-foreground" /> },
//     { title: "Total Expenses", value: "$8,730.45", change: "+180.1% from last month", icon: <CreditCard className="h-5 w-5 text-muted-foreground" /> },
//     { title: "Savings Goal", value: "75% Reached", change: "$7,500 / $10,000", icon: <Users className="h-5 w-5 text-muted-foreground" /> },
//     { title: "Account Activity", value: "+$1,982.00", change: "Last 7 days", icon: <Activity className="h-5 w-5 text-muted-foreground" /> },
//   ];

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user.name}!</h1>
//           <p className="text-muted-foreground">Here's your financial overview for today.</p>
//         </div>
//         <Button>
//           <Download className="mr-2 h-4 w-4" />
//           Download Report
//         </Button>
//       </div>

//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//         {quickStats.map((stat) => (
//           <Card key={stat.title} className="shadow-md hover:shadow-lg transition-shadow">
//             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//               <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
//               {stat.icon}
//             </CardHeader>
//             <CardContent>
//               <div className="text-2xl font-bold">{stat.value}</div>
//               <p className="text-xs text-muted-foreground">{stat.change}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
      
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <Card className="lg:col-span-2 shadow-md hover:shadow-lg transition-shadow">
//           <CardHeader>
//             <CardTitle>Account Details</CardTitle>
//             <CardDescription>Your primary account information.</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-md">
//               <span className="font-medium text-muted-foreground">Account Holder:</span>
//               <span className="font-semibold">{user.name}</span>
//             </div>
//             <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-md">
//               <span className="font-medium text-muted-foreground">Email Address:</span>
//               <span className="font-semibold">{user.email}</span>
//             </div>
//             <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-md">
//               <span className="font-medium text-muted-foreground">Account Number:</span>
//               <span className="font-semibold">{user.accountNumber}</span>
//             </div>
//             <div className="flex justify-between items-center p-3 bg-primary/10 rounded-md">
//               <span className="font-medium text-primary">Current Balance:</span>
//               <span className="text-2xl font-bold text-primary">
//                 ${user.balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
//               </span>
//             </div>
//             <div className="flex gap-2 pt-2">
//               <Link href="/transfer" passHref>
//                 <Button>Transfer Funds</Button>
//               </Link>
//               <Link href="/transactions" passHref>
//                 <Button variant="outline">View Transactions</Button>
//               </Link>
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="shadow-md hover:shadow-lg transition-shadow">
//           <CardHeader>
//             <CardTitle>Quick Actions</CardTitle>
//             <CardDescription>Commonly used features.</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-3">
//             <Button className="w-full justify-start" variant="ghost" asChild>
//               <Link href="/transfer"><ArrowRightLeft className="mr-2 h-4 w-4" /> Make a Payment</Link>
//             </Button>
//             <Button className="w-full justify-start" variant="ghost" asChild>
//               <Link href="/profile"><User className="mr-2 h-4 w-4" /> Update Profile</Link>
//             </Button>
//             <Button className="w-full justify-start" variant="ghost" asChild>
//               <Link href="/financial-tips"><Lightbulb className="mr-2 h-4 w-4" /> Get Financial Advice</Link>
//             </Button>
//              <Image 
//                 src="https://picsum.photos/seed/promo1/400/200" 
//                 alt="Promotional offer" 
//                 width={400} 
//                 height={200}
//                 data-ai-hint="financial services promotion"
//                 className="rounded-md mt-4 object-cover aspect-video"
//               />
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  CreditCard,
  Users,
  Activity,
  Download,
  ArrowRightLeft,
  User,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }

      try {
        const res = await fetch("https://unionly-server.onrender.com/api/auth/user-dashboard", {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setUser(data);
        } else {
          console.error("Failed to fetch dashboard:", data.error);
        }
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) return <p>Loading dashboard...</p>;
  if (!user) return <p>Unable to load user data.</p>;

  // Default balance (mocked for now)
  const balance = 25730.55;

  const quickStats = [
    {
      title: "Total Income",
      value: "$15,231.89",
      change: "+20.1% from last month",
      icon: <DollarSign className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Total Expenses",
      value: "$8,730.45",
      change: "+180.1% from last month",
      icon: <CreditCard className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Savings Goal",
      value: "75% Reached",
      change: "$7,500 / $10,000",
      icon: <Users className="h-5 w-5 text-muted-foreground" />,
    },
    {
      title: "Account Activity",
      value: "+$1,982.00",
      change: "Last 7 days",
      icon: <Activity className="h-5 w-5 text-muted-foreground" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {user.welcome.replace("Welcome ", "")}!
          </h1>
          <p className="text-muted-foreground">Here's your financial overview for today.</p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat) => (
          <Card key={stat.title} className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
            <CardDescription>Your primary account information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-md">
              <span className="font-medium text-muted-foreground">Account Holder:</span>
              <span className="font-semibold">{user.welcome.replace("Welcome ", "")}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-md">
              <span className="font-medium text-muted-foreground">Email Address:</span>
              <span className="font-semibold">{user.email}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-secondary/30 rounded-md">
              <span className="font-medium text-muted-foreground">Account Number:</span>
              <span className="font-semibold">{user.accountNumber}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-primary/10 rounded-md">
              <span className="font-medium text-primary">Current Balance:</span>
              <span className="text-2xl font-bold text-primary">
                ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex gap-2 pt-2">
              <Link href="/transfer" passHref>
                <Button>Transfer Funds</Button>
              </Link>
              <Link href="/transactions" passHref>
                <Button variant="outline">View Transactions</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Commonly used features.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="ghost" asChild>
              <Link href="/transfer">
                <ArrowRightLeft className="mr-2 h-4 w-4" /> Make a Payment
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="ghost" asChild>
              <Link href="/profile">
                <User className="mr-2 h-4 w-4" /> Update Profile
              </Link>
            </Button>
            <Button className="w-full justify-start" variant="ghost" asChild>
              <Link href="/financial-tips">
                <Lightbulb className="mr-2 h-4 w-4" /> Get Financial Advice
              </Link>
            </Button>
            <Image
              src="https://picsum.photos/seed/promo1/400/200"
              alt="Promotional offer"
              width={400}
              height={200}
              data-ai-hint="financial services promotion"
              className="rounded-md mt-4 object-cover aspect-video"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

