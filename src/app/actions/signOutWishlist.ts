"use server";

import { signOut } from "../utils/auth";

export async function signOutWishlist() {
  await signOut({ redirectTo: "/wishlist" });
}
