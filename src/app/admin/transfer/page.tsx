"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Banknote, Repeat } from "lucide-react";
import Image from "next/image";

const transferFormSchema = z.object({
  recipientAccount: z.string().min(10, {
    message: "Recipient account number must be at least 10 characters.",
  }).max(20, {
    message: "Recipient account number must not exceed 20 characters."
  }),
  amount: z.coerce.number().positive({
    message: "Amount must be positive.",
  }).min(1, { message: "Minimum transfer amount is $1.00"}),
  remarks: z.string().max(100, {
    message: "Remarks must not exceed 100 characters."
  }).optional(),
});

type TransferFormValues = z.infer<typeof transferFormSchema>;

const defaultValues: Partial<TransferFormValues> = {
  recipientAccount: "",
  amount: undefined,
  remarks: "",
};

export default function TransferPage() {
  const { toast } = useToast();
  const form = useForm<TransferFormValues>({
    resolver: zodResolver(transferFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: TransferFormValues) {
    console.log("Mock transfer data:", data);
    toast({
      title: "Transfer Initiated (Mocked)",
      description: `Successfully initiated transfer of $${data.amount.toFixed(2)} to ${data.recipientAccount}.`,
      variant: "default",
    });
    form.reset();
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <Card className="lg:col-span-2 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center"><Banknote className="mr-2 h-6 w-6 text-primary" /> Transfer Funds</CardTitle>
          <CardDescription>Securely send money to other accounts. This is a mock transaction.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="recipientAccount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipient Account Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter recipient's account number" {...field} className="bg-background" />
                    </FormControl>
                    <FormDescription>
                      Ensure the account number is correct.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount to Transfer ($)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="0.00" {...field} step="0.01" className="bg-background" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="remarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Remarks (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Add a note for the recipient or for your records"
                        className="resize-none bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="border-t pt-6 flex justify-end">
              <Button type="submit" className="min-w-[150px]">
                Send Transfer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center"><Repeat className="mr-2 h-5 w-5 text-primary" /> Recent Payees</CardTitle>
          <CardDescription>Quickly transfer to people you've paid before.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {["John Smith (....1234)", "Alice Wonderland (....5678)", "Bob The Builder (....9012)"].map(payee => (
             <Button key={payee} variant="outline" className="w-full justify-start" onClick={() => form.setValue("recipientAccount", payee.split(" (")[1].replace("....","").replace(")","123456"))}>
                {payee}
             </Button>
          ))}
          <Image 
            src="https://picsum.photos/seed/transferAd/400/200" 
            alt="Secure Transfer Ad" 
            width={400} 
            height={200}
            data-ai-hint="secure payment online banking"
            className="rounded-md mt-4 object-cover aspect-video"
          />
        </CardContent>
      </Card>
    </div>
  );
}
