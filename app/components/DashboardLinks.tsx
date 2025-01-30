'use client';

import Link from "next/link";
import { cn } from "@/lib/utils";
import { HomeIcon, Receipt } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type NavLink = {
    id: number;
    name: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    matchExact: boolean;
};

const links: NavLink[] = [
    {
        id: 0,
        name: 'Dashboard',
        href: '/dashboard',
        icon: HomeIcon,
        matchExact: true,
    },
    {
        id: 1,
        name: 'Invoices',
        href: '/dashboard/invoices',
        icon: Receipt,
        matchExact: false,
    }
];

interface Props {
    isCollapsed?: boolean;
    currentPath?: string;
}

export function DashboardLinks({ isCollapsed, currentPath }: Props) {
    const isActive = (href: string, exact: boolean) =>
        currentPath && (exact ? currentPath === href : currentPath.startsWith(href));

    return (
        <nav className="flex flex-col gap-1 p-2">
            {links.map(({ id, name, href, icon: Icon, matchExact }) => {
                const active = isActive(href, matchExact);
                const baseStyles = "flex items-center gap-3 rounded-md transition-colors focus:outline-none";
                const stateStyles = active
                    ? "bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600"
                    : "text-gray-500 hover:bg-blue-50 hover:text-blue-600";
                const sizeStyles = isCollapsed ? "p-3 justify-center" : "px-4 py-2.5";

                return (
                    <Tooltip key={id} disableHoverableContent>
                        <TooltipTrigger asChild>
                            <Link
                                href={href}
                                className={cn(baseStyles, stateStyles, sizeStyles)}
                                aria-current={active ? "page" : undefined}
                            >
                                <Icon className={cn(
                                    "shrink-0 transition-colors",
                                    isCollapsed ? "size-6" : "size-5 -ml-1",
                                    active ? "text-blue-600" : "text-current"
                                )} />

                                {!isCollapsed && (
                                    <span className="text-sm truncate tracking-wide">
                                        {name}
                                    </span>
                                )}
                            </Link>
                        </TooltipTrigger>

                        {isCollapsed && (
                            <TooltipContent
                                side="right"
                                sideOffset={10}
                                className="bg-gray-800 text-white px-3 py-2 text-sm shadow-lg"
                            >
                                {name}
                            </TooltipContent>
                        )}
                    </Tooltip>
                );
            })}
        </nav>
    );
}