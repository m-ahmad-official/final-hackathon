"use server";

import { signOut } from "../utils/auth";

export async function signOutHome() {
  await signOut({ redirectTo: "/" });
}
