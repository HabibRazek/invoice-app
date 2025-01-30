// components/DashboardLinks.tsx
'use client';

import Link from "next/link";
import { cn } from "@/lib/utils";
import { HomeIcon, Receipt } from "lucide-react";

export const dashboardLinks = [
    {
        id: 0,
        name: 'Dashboard',
        href: '/dashboard',
        icon: HomeIcon,
    },
    {
        id: 1,
        name: 'Invoices',
        href: '/dashboard/invoices',
        icon: Receipt,
    }
];

interface DashboardLinksProps {
    isCollapsed?: boolean;
    currentPath?: string;
}

export function DashboardLinks({ isCollapsed, currentPath }: DashboardLinksProps) {
    return (
        <>
            {dashboardLinks.map((link) => (
                <Link
                    key={link.id}
                    href={link.href}
                    className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 mb-1 transition-colors",
                        currentPath === link.href
                            ? "text-primary bg-blue-100"
                            : "text-muted-foreground hover:bg-accent",
                        isCollapsed ? "justify-center" : "justify-start"
                    )}
                    aria-label={link.name}
                >
                    <link.icon className="size-5" />
                    {!isCollapsed && <span className="text-sm">{link.name}</span>}
                </Link>
            ))}
        </>
    );
}