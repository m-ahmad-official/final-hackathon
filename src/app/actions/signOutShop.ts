"use server";

import { signOut } from "../utils/auth";

export async function signOutShop() {
  await signOut({ redirectTo: "/shop" });
}
