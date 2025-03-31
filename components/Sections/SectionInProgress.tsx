import React from "react";
import SectionHeading from "../SectionHeading";
import Image from "next/image";

const SectionInProgress = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center py-10">
      <Image
        src="/meta/logo.svg"
        alt="AventGroup logo"
        width={320}
        height={132}
        className="mx-auto mt-8"
      />
      <SectionHeading
        title="Website Under Construction"
        subtitle="We’re currently redesigning our website to serve you better. Please check back soon!"
        className="text-center"
      />
      <Image
        src="/images/SectionInProgress/under-construction.png"
        alt="Under construction illustration"
        width={400}
        height={300}
        className="mx-auto mt-8"
      />
    </section>
  );
};

export default SectionInProgress;
