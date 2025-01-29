"use server";

import { signOut } from "../utils/auth";

export async function signOutTeam() {
  await signOut({ redirectTo: "/team" });
}
