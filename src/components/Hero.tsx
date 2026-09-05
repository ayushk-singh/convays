"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full bg-zinc-950 p-4 sm:p-6 lg:p-8">
      <section className="w-full overflow-hidden rounded-3xl bg-gradient-to-br from-sky-300 via-emerald-300 to-emerald-400">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          {/* Left Content */}
          <div className="flex flex-col items-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-zinc-900 shadow-sm">
              <span>🚀</span>
              <span>Hire us</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-extrabold leading-tight text-center text-zinc-900 sm:text-3xl lg:text-4xl">
              Automate. Integrate. Grow.
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-md text-lg text-center text-zinc-800/90">
              Scale your business, not your workload. We connect your tools,
              automate your workflows, and unify everything into one
              seamless system.
            </p>

            {/* CTA */}
            <button className="mt-8 rounded-xl bg-zinc-900 px-6 py-3.5 text-base font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800">
              Book A Meeting
            </button>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <Image
              src={"/hero.png"}
              alt="Convays Digital automation overview"
              width={700}
              height={600}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}