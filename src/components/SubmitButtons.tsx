"use client";

import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface GeneralSubmitButtonProps {
  text: string;
  icon?: ReactNode;
}

export function GeneralSubmitButton({ text, icon }: GeneralSubmitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-[#23A6F0] hover:bg-[#0e8bd2] text-white transition-all duration-200 rounded-md py-3 w-full flex items-center justify-center gap-3 font-semibold"
      disabled={pending}
    >
      {pending ? (
        <div className="loader"></div>
      ) : (
        <>
          {icon && <div>{icon}</div>}
          <span>{text}</span>
        </>
      )}
    </button>
  );
}
