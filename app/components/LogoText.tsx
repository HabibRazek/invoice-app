import Link from "next/link";
import { Receipt } from "lucide-react";

interface LogoTextProps {
    text: string;
    href?: string;
}

export default function LogoText({ text, href = "/" }: LogoTextProps) {
    return (
        <Link href={href} className="group">
            <span className="inline-flex items-center gap-2 text-2xl font-bold text-blue-700 p-2 rounded-lg">
                <Receipt className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {text}
                </span>
            </span>
        </Link>
    );
}