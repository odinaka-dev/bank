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
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { UserCircle, Mail, Phone, Save, ShieldCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const profileFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits."
  }).optional().or(z.literal("")), // Allow empty string or valid phone number
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// Mock current user data
const currentUser = {
  fullName: "Jane Doe",
  email: "jane.doe@example.com",
  phoneNumber: "123-456-7890",
  avatarUrl: "https://picsum.photos/seed/user1/100/100",
  initials: "JD",
};

const defaultValues: Partial<ProfileFormValues> = {
  fullName: currentUser.fullName,
  email: currentUser.email,
  phoneNumber: currentUser.phoneNumber,
};

export default function ProfilePage() {
  const { toast } = useToast();
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  function onSubmit(data: ProfileFormValues) {
    console.log("Mock profile update data:", data);
    toast({
      title: "Profile Updated (Mocked)",
      description: "Your personal information has been successfully updated.",
    });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
      <Card className="lg:col-span-2 shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={currentUser.avatarUrl} alt={currentUser.fullName} data-ai-hint="profile avatar" />
              <AvatarFallback>{currentUser.initials}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl flex items-center">
                <UserCircle className="mr-2 h-6 w-6 text-primary" /> {currentUser.fullName}
              </CardTitle>
              <CardDescription>Manage your personal information and account settings.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Enter your full name" {...field} className="pl-10 bg-background" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                       <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input type="email" placeholder="your.email@example.com" {...field} className="pl-10 bg-background" disabled />
                       </div>
                    </FormControl>
                    <FormDescription>
                      Email address cannot be changed. Contact support for assistance.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input type="tel" placeholder="Enter your phone number" {...field} className="pl-10 bg-background" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="border-t pt-6 flex justify-end">
              <Button type="submit" className="min-w-[150px]">
                <Save className="mr-2 h-4 w-4" /> Save Changes
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
       <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center"><ShieldCheck className="mr-2 h-5 w-5 text-primary" /> Security Settings</CardTitle>
          <CardDescription>Manage your account security.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
           <Button variant="outline" className="w-full justify-start">Change Password</Button>
           <Button variant="outline" className="w-full justify-start">Two-Factor Authentication</Button>
           <Button variant="outline" className="w-full justify-start">Login History</Button>
            <Image 
              src="https://picsum.photos/seed/securityAd/400/200" 
              alt="Account Security Ad" 
              width={400} 
              height={200}
              data-ai-hint="cyber security online protection"
              className="rounded-md mt-4 object-cover aspect-video"
            />
        </CardContent>
      </Card>
    </div>
  );
}
