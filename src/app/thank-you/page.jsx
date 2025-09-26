import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-start py-12 mt-[-50px] text-center max-w-[580px]">
        <div className="flex items-center justify-center w-16 h-16 mb-6 ">
          <span className="text-2xl text-white">
            <img src="/images/formtick.png" alt="" />
          </span>
        </div>
        <h2 className="text-[60px] archivo-expanded font-bold">THANK YOU!</h2>
        <p className="mt-6 text-[18px]">
          We will reach out to you within 24 hours.
        </p>
        <p className="mt-2 text-[18px]">
          Alternatively, you can reach out to on our{" "}
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=919372027820"
            className="underline"
          >
            WhatsApp
          </Link>{" "}
          or call us on{" "}
          <Link target="_blank" href="tel:9372027820" className="underline">
            +91 93720 27820
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default page;
