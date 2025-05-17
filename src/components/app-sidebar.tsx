"use client";

import * as React from "react";
import {
  ArrowUpCircleIcon,
  BarChartIcon,
  CameraIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileCodeIcon,
  FileIcon,
  FileTextIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  LogOutIcon,
  SearchIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Logo from "@/components/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/admin-dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Manage Customers",
      url: "/new-customers",
      icon: FolderIcon,
    },
    {
      title: "All customers",
      url: "/all-users",
      icon: UsersIcon,
    },
    {
      title: "All transactions",
      url: "/all-transactions",
      icon: ListIcon,
    },
    {
      title: "Generate Code",
      url: "/generate-code",
      icon: BarChartIcon,
    },
  ],
};

const menuItems = [
  { href: "/admin-dashboard", label: "Dashboard", icon: LayoutDashboardIcon },
  { href: "/all-transactions", label: "All Transactions", icon: ListIcon },
  { href: "/all-users", label: "Customers", icon: UsersIcon },
  { href: "/new-customers", label: "Add New Customers", icon: FolderIcon },
  { href: "/generate-code", label: "Generate code", icon: BarChartIcon },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Logo />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
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
      <SidebarFooter>
        <div className="flex gap-4 items-center text-sm">
          <LogOutIcon />
          <p>Log out</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
