"use server";

import { signOut } from "../utils/auth";

export async function signOutPricing() {
  await signOut({ redirectTo: "/pricing" });
}
