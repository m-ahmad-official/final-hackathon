import { LoginForm } from "@/components/LoginForm";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#0A0B08]">
      <div className="flex flex-col gap-6 max-sm:w-[350px]">
        <Link href={"/"} className="text-center">
          <h2 className="text-2xl font-bold text-white">
            Bandage <span className="text-[#31BD6D]">Web</span>
          </h2>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
