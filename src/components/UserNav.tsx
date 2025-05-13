"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  List,
  ArrowRightLeft,
  Lightbulb,
  User,
  LogOut,
  Settings,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const menuItems = [
  { href: "/", label: "home", icon: LayoutGrid },
  { href: "/account", label: "Account", icon: LayoutGrid },
  { href: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { href: "/transactions", label: "Transactions", icon: List },
  { href: "/transfer", label: "Transfer Funds", icon: ArrowRightLeft },
  { href: "/financial-tips", label: "Financial Tips", icon: Lightbulb },
  { href: "/profile", label: "Profile", icon: User },
];

export function UserNav() {
  const pathname = usePathname();
  const { open } = useSidebar();

  return (
    <>
      <SidebarGroup className="sticky top-0 z-10 bg-sidebar pt-3 pb-2">
        <Logo
          className={cn("text-sidebar-foreground ml-1", !open && "hidden")}
        />
      </SidebarGroup>
      <SidebarMenu className="flex-1">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <SidebarMenuButton
                isActive={pathname === item.href}
                tooltip={{
                  children: item.label,
                  className: "text-xs px-2 py-1",
                }}
                className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground"
              >
                <item.icon className="h-5 w-5" />
                <span className={cn(!open && "hidden")}>{item.label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      <SidebarGroup className="sticky bottom-0 pb-2 mt-auto bg-sidebar">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="#" legacyBehavior passHref>
              <SidebarMenuButton
                className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                tooltip={{
                  children: "Settings",
                  className: "text-xs px-2 py-1",
                }}
              >
                <Settings className="h-5 w-5" />
                <span className={cn(!open && "hidden")}>Settings</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="#" legacyBehavior passHref>
              <SidebarMenuButton
                className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                tooltip={{ children: "Help", className: "text-xs px-2 py-1" }}
              >
                <HelpCircle className="h-5 w-5" />
                <span className={cn(!open && "hidden")}>Help</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            {/* Mock logout button */}
            <SidebarMenuButton
              className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              tooltip={{ children: "Log Out", className: "text-xs px-2 py-1" }}
              onClick={() => alert("Log out functionality not implemented.")}
            >
              <LogOut className="h-5 w-5" />
              <span className={cn(!open && "hidden")}>Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
