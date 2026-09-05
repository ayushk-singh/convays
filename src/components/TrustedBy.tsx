"use client";

import Image from "next/image";

const logos = [
  { name: "SP Roadlines", src: "/trustedBy/SpRoadlines.png" },
  { name: "TCS", src: "/trustedBy/tcs.png" },
  { name: "Heena Group", src: "/trustedBy/heenaGrp.png" },
  { name: "Purple Dots", src: "/trustedBy/purpleDot.png" },
];

export default function TrustedBy() {
  // duplicate the array so the marquee loops seamlessly
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-zinc-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-white sm:text-4xl">
          Trusted By
        </h2>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-16">
            {duplicatedLogos.map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex h-16 w-40 flex-shrink-0 items-center justify-center"
              >
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={0}
                    height={0}
                    sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
                    className="h-auto max-h-16 w-auto object-contain"
                  />
                ) : (
                  <span className="text-sm text-zinc-500">{logo.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker Bars */}
      {/* <div className="mt-14 w-full">

        <TickerBar bg="bg-sky-300" text="text-zinc-900" animate={false} />


        <TickerBar
          bg="bg-orange-500"
          text="text-white"
          label="This is a news"
          size="text-lg font-semibold"
          animate
        />


        <TickerBar bg="bg-emerald-300" text="text-zinc-900" animate={false} />
      </div> */}

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 25s linear infinite;
          will-change: transform;
        }

        @keyframes marquee-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}

function TickerBar({
  bg,
  text,
  label = "Convays Intelligence",
  size = "text-xs font-medium",
  animate,
}: {
  bg: string;
  text: string;
  label?: string;
  size?: string;
  animate: boolean;
}) {
  const items = Array.from({ length: 10 }, (_, i) => i);
  const renderItems = animate ? [...items, ...items] : items;

  return (
    <div className={`w-full overflow-hidden py-2 ${bg}`}>
      <div
        className={`flex w-max items-center gap-10 whitespace-nowrap ${
          animate ? "news-track" : ""
        }`}
      >
        {renderItems.map((i, idx) => (
          <span key={`${i}-${idx}`} className={`${size} ${text}`}>
            {label}
          </span>
        ))}
      </div>

      {animate && (
        <style jsx>{`
          .news-track {
            animation: news-scroll 15s linear infinite;
            will-change: transform;
          }

          @keyframes news-scroll {
            from {
              transform: translate3d(0, 0, 0);
            }
            to {
              transform: translate3d(-50%, 0, 0);
            }
          }
        `}</style>
      )}
    </div>
  );
}