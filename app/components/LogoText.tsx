// components/LogoText.tsx
import Link from "next/link";
import { Receipt } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoTextProps {
    text: string;
    href?: string;
    isCollapsed?: boolean;
}

export default function LogoText({
    text,
    href = "/",
    isCollapsed
}: LogoTextProps) {
    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-2 transition-all overflow-hidden",
                isCollapsed ? "w-10 justify-center" : "w-full justify-start"
            )}
            aria-label="Home"
        >
            <Receipt className="size-7 text-blue-700 shrink-0" />
            {!isCollapsed && (
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent truncate">
                    {text}
                </span>
            )}
        </Link>
    );
}