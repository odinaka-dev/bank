import type { Metadata } from "next";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserNav } from "@/components/UserNav";
import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "User Dashboard - Transaction Teller",
  description: "Manage your account and transactions.",
};

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen={true} open={true}>
      <Sidebar className="border-r" collapsible="icon">
        <SidebarContent>
          <UserNav />
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
          <div className="flex items-center gap-4">
             <SidebarTrigger className="md:hidden" /> {/* Only show on mobile where sidebar starts closed */}
             <div className="hidden md:block"> {/* Logo for desktop when sidebar might be collapsed icon-only */}
                <Logo className="text-foreground" />
             </div>
          </div>
          <div className="flex items-center gap-4">
            <form className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-background"
              />
            </form>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://picsum.photos/seed/user1/40/40" data-ai-hint="profile avatar" alt="User Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
