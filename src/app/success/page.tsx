import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { CheckCheck } from "lucide-react";

const Success = () => {
  return (
    <div className="mt-48">
      <div className="md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for you purchase We hope you enjoy it
          </p>
          <p>Have a great day!</p>
          <Button asChild className="mt-5 bg-[#23A6F0] hover:bg-[#0e8bd2]">
            <Link href="/" className="text-white font-medium">
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
