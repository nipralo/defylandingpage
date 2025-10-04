"use client"
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-start py-12 mt-[-50px] text-center max-w-[580px]">
        <div className="flex items-center justify-center w-16 h-16 mb-6 ">
          <span className="text-2xl text-white">
            <img src="/images/formtick.png" alt="" />
          </span>
        </div>
        <h2 className="xl:text-[60px] archivo-expanded font-bold">THANK YOU!</h2>
        <p className="mt-6 lg:text-[18px]">
          We will reach out to you within 24 hours.
        </p>
        <p className="mt-2 lg:text-[18px] px-4">
          Alternatively, you can reach out to on our{" "}
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=919372027820"
            className="underline"
          >
            WhatsApp
          </Link>{" "}
          or call us on{" "}
          <Link target="_blank" href="tel:9137597491" className="underline">
            +91 91375 97491
          </Link>{" "}
        </p>
        <div className="absolute bottom-8">
          <button
            className={`p-2 md:p-3 cursor-pointer flex items-center gap-4`}
            onClick={()=> router.push("/")}
          >
            <p className="hover:underline">Go To Home Page</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
