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
                className={`hidden md:block border-r bg-background transition-all duration-300 ${isCollapsed ? 'w-[60px]' : 'w-64'
                    }`}
            >
                <div className="flex h-full flex-col">
                    <div className="flex h-14 items-center border-b px-2 lg:h-[60px]">
                        <div className="flex-1 flex items-center">
                            <LogoText text="InvoicePro" isCollapsed={isCollapsed} />
                        </div>

                    </div>

                    <nav className="flex-1 overflow-y-auto p-2">
                        <DashboardLinks isCollapsed={isCollapsed} currentPath={pathname} />
                    </nav>
                </div>
            </aside>

            


            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <header className="flex h-14 items-center justify-between border-b px-4 lg:h-[60px] lg:px-6 gap-4">


                    {/* Mobile Sidebar Trigger */}
                    <div className="md:hidden z-10">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="bg-transparent outline-none shadow-none border-none"
                                    size="icon"
                                    aria-label="Open mobile menu"

                                >
                                    <Menu className="size-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-64">
                                <LogoText text="InvoicePro" />
                                <nav className="mt-6 space-y-1">
                                    <DashboardLinks currentPath={pathname} />
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>


                    {/* Desktop Header */}
                    <button
                        onClick={toggleSidebar}
                        className="shrink-0 rounded-full text-blue-700 hidden md:block"
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
                                className="rounded-full ml-auto"
                                aria-label="User menu"
                            >
                                <User2 className="size-5" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/dashboard/profile">Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/dashboard/settings">Settings</Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <form action={logout} className="w-full">
                                    <button
                                        type="submit"
                                        className="w-full flex items-center gap-2"
                                    >
                                        <LogOut className="size-4" />
                                        Logout
                                    </button>
                                </form>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>



                <main className="flex-1 p-4 lg:p-6 bg-background">
                    <div className="h-full">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}