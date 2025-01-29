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
      className="bg-black hover:bg-[#252525] transition-all duration-200 border-[#333333] border text-white rounded-md py-2 w-full flex items-center justify-center gap-3"
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
