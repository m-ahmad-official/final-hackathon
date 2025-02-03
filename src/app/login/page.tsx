import { LoginForm } from "@/components/LoginForm";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[#FAFAFA]">
      <div className="flex flex-col gap-6 max-sm:w-[350px]">
        <Link href={"/"} className="text-center">
          <h2 className="text-3xl font-bold">
            Bandage <span className="text-[#29A8F0]">Web</span>
          </h2>
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
