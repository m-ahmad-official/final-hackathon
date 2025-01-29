"use server";

import { signOut } from "../utils/auth";

export async function signOutAbout() {
  await signOut({ redirectTo: "/about" });
}
