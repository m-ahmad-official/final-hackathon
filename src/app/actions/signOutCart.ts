"use server";

import { signOut } from "../utils/auth";

export async function signOutCart() {
  await signOut({ redirectTo: "/cart" });
}
