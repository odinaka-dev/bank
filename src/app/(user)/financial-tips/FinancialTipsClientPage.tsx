"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { generateFinancialTips, type FinancialTipsInput } from "@/ai/flows/financial-tips";
import { Lightbulb, AlertTriangle, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";

// Mock data for demonstration
const mockTransactionHistory = JSON.stringify([
  { date: "2024-07-01", description: "Salary", amount: 3000, type: "credit" },
  { date: "2024-07-02", description: "Groceries", amount: -150, type: "debit" },
  { date: "2024-07-05", description: "Investment", amount: -500, type: "debit" },
  { date: "2024-07-10", description: "Online Course", amount: -99, type: "debit" },
  { date: "2024-07-15", description: "Freelance Payment", amount: 400, type: "credit" },
]);
const mockAccountBalance = 5751; // Example balance

export default function FinancialTipsClientPage() {
  const [tips, setTips] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetTips = async () => {
    setIsLoading(true);
    setError(null);
    setTips(null);

    try {
      const input: FinancialTipsInput = {
        transactionHistory: mockTransactionHistory,
        accountBalance: mockAccountBalance,
      };
      const result = await generateFinancialTips(input);
      setTips(result.financialTips);
    } catch (e) {
      console.error("Error generating financial tips:", e);
      setError("Failed to generate financial tips. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <Card className="lg:col-span-2 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <Lightbulb className="mr-2 h-6 w-6 text-primary" /> AI-Powered Financial Tips
          </CardTitle>
          <CardDescription>
            Get personalized financial advice based on your (mocked) transaction history and balance.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!tips && !isLoading && !error && (
            <Alert>
              <Sparkles className="h-4 w-4" />
              <AlertTitle>Ready for Insights?</AlertTitle>
              <AlertDescription>
                Click the button below to let our AI analyze your financial patterns and provide tailored advice.
                For this demo, we're using sample data.
              </AlertDescription>
            </Alert>
          )}
          {isLoading && (
            <div className="space-y-3">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-5/6" />
              <Skeleton className="h-6 w-full" />
            </div>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {tips && !isLoading && (
            <Alert variant="default" className="bg-green-500/10 border-green-500/30">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <AlertTitle className="text-green-700 font-semibold">Your Personalized Tips</AlertTitle>
              <AlertDescription className="text-foreground whitespace-pre-line">
                {tips}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="border-t pt-6">
          <Button onClick={handleGetTips} disabled={isLoading} className="min-w-[180px]">
            {isLoading ? "Generating Tips..." : "Get Financial Tips"}
          </Button>
        </CardFooter>
      </Card>
       <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Financial Wellness Hub</CardTitle>
          <CardDescription>Resources to help you grow.</CardDescription>
        </CardHeader>
        <CardContent>
          <Image 
            src="https://picsum.photos/seed/financialWellness/400/250" 
            alt="Financial planning" 
            width={400} 
            height={250}
            data-ai-hint="financial planning calculator"
            className="rounded-md mb-4 object-cover aspect-video"
          />
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><Sparkles className="h-4 w-4 mr-2 text-accent" /> Budgeting Tools & Calculators</li>
            <li className="flex items-center"><Sparkles className="h-4 w-4 mr-2 text-accent" /> Investment Guides for Beginners</li>
            <li className="flex items-center"><Sparkles className="h-4 w-4 mr-2 text-accent" /> Debt Management Strategies</li>
            <li className="flex items-center"><Sparkles className="h-4 w-4 mr-2 text-accent" /> Understanding Credit Scores</li>
          </ul>
          <Button variant="outline" className="w-full mt-6">Explore Resources</Button>
        </CardContent>
      </Card>
    </div>
  );
}
