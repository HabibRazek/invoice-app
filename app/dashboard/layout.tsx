'use client';

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Menu, User2, PanelRightOpen, PanelLeftOpen } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import LogoText from "../components/LogoText";
import { DashboardLinks } from "../components/DashboardLinks";
import { logout } from "@/actions/auth";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();
    const toggleSidebar = () => setIsCollapsed(prev => !prev);

    return (
        <div className="flex min-h-screen w-full">
            {/* Desktop Sidebar */}
            <aside
                className={`hidden md:block bg-background border-r transition-all duration-300 overflow-hidden ${
                    isCollapsed ? 'w-[60px]' : 'w-64'
                }`}
            >
                <div className="flex h-full flex-col">
                    <div className="flex h-14 items-center px-2 lg:h-[60px]">
                        <div className="flex-1 flex items-center">
                            <LogoText text="InvoicePro" isCollapsed={isCollapsed} />
                        </div>
                    </div>
                    
                    {/* Animated Description Text */}
                    <div className={`px-4 transition-all duration-300 ${
                        isCollapsed ? 'opacity-0 h-0' : 'opacity-100 h-auto'
                    }`}>
                        <p className="text-xs text-muted-foreground mb-4 leading-snug">
                            Simplify Invoicing, Master Stock All in One Place!
                        </p>
                    </div>
                    <nav className="flex-1 overflow-y-auto ">
                        <DashboardLinks isCollapsed={isCollapsed} currentPath={pathname} />
                    </nav>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <header className="flex h-14 items-center justify-between px-4 lg:h-[60px] lg:px-6 gap-4">
                    {/* Mobile Sidebar Trigger */}
                    <div className="md:hidden z-10">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="bg-transparent shadow-none border-none hover:bg-accent"
                                    size="icon"
                                    aria-label="Open mobile menu"
                                >
                                    <Menu className="size-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-64">
                                <LogoText text="InvoicePro" />
                                <p className="text-xs text-muted-foreground mt-2 mb-6">
                                    Simplify Invoicing, Master Stock – All in One Place!
                                </p>
                                <nav className="space-y-1">
                                    <DashboardLinks currentPath={pathname} />
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Desktop Collapse Toggle */}
                    <button
                        onClick={toggleSidebar}
                        className="shrink-0 text-blue-700 hover:text-blue-700/80 hidden md:block transition-colors"
                        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    >
                        {isCollapsed ? (
                            <PanelRightOpen className="size-6" />
                        ) : (
                            <PanelLeftOpen className="size-6" />
                        )}
                    </button>

                    {/* User Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full ml-auto hover:bg-accent"
                                aria-label="User menu"
                            >
                                <User2 className="size-5" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-56">
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">John Doe</p>
                                    <p className="text-xs leading-none text-muted-foreground">
                                        john@example.com
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/dashboard/profile" className="cursor-pointer">
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/dashboard/settings" className="cursor-pointer">
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <form action={logout} className="w-full">
                                    <button
                                        type="submit"
                                        className="w-full flex items-center gap-2 cursor-pointer font-medium"
                                    >
                                        <LogOut className="size-4" />
                                        Logout
                                    </button>
                                </form>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>

                <main className="flex-1 p-4 lg:p-2 bg-background">
                    <div className="h-full  p-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}