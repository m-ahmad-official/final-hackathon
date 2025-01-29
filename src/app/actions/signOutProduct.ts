"use server";

import { signOut } from "../utils/auth";

export async function signOutProduct() {
  await signOut({ redirectTo: "/product" });
}
