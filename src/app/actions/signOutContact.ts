"use server";

import { signOut } from "../utils/auth";

export async function signOutContact() {
  await signOut({ redirectTo: "/contact" });
}
