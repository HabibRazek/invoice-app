'use server';

import { signOut } from "@/app/utils/auth";

export const logout = async () => {
    await signOut();
};